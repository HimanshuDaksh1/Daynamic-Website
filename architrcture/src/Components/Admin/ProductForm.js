import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row,Form } from "react-bootstrap";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
// import "./pages.css";
import Spinner from "react-bootstrap/Spinner";
import {
  addDoc,
  doc,
  collection,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore"
import { useNavigate, useParams } from "react-router-dom";
// import MainLayout from "./MainLayout";

const initialState = {
  name: "",
  email: "",
  info: "",
  contact: "",
};

const ProductForm = () => {
  const [data, setData] = useState(initialState);
  const { name, email, info, contact } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    id && getSingleUser();
  }, [id]);

  const getSingleUser = async () => {
    const docRef = doc(db, "news", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setData({ ...snapshot.data() });
    }
  };
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + `/files/${file.name}`;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_chage",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is Pause");
              break;
            case "running":
              console.log("Upload is Running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const validate = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is Required";
    }
    if (!email) {
      errors.email = "Email is Required";
    }
    if (!info) {
      errors.info = "Info is Required";
    }
    if (!contact) {
      errors.contact = "Contact is Required";
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    // setData("")
    if (!id) {
      try {
        await addDoc(collection(db, "news"), {
          ...data,
          timestamp: serverTimestamp(),
          // setIsSubmit(true)
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await updateDoc(doc(db, "news", id), {
          ...data,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    }
    navigate("/products");
  };

  return (
    <>
        <div>
          {isSubmit ? (
            <Spinner animation="border" />
          ) : (
            <>
              <h4>{id ? "Update Product" : "Add New Product"}</h4>
              <br />
              <Form onSubmit={handleSubmit}>
            <Container className="main-form">
                <Row>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        label="Name"
                        name="name"
                        error={errors.name ? { content: errors.name } : null}
                        placeholder="Enter Name"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                      />
                    </Form.Group>
                  </Col>
                  {/* <br /> */}
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        label="Email"
                        name="email"
                        error={errors.email ? { content: errors.email } : null}
                        placeholder="Enter Email"
                        onChange={handleChange}
                        value={email}
                      />
                    </Form.Group>
                  </Col>
                  </Row>
                  <Row>
                  {/* <br /> */}
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        label="Info"
                        name="info"
                        error={errors.info ? { content: errors.info } : null}
                        placeholder="Enter Info"
                        onChange={handleChange}
                        value={info}
                      />
                    </Form.Group>
                  </Col>
                  {/* <br /> */}
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Control
                        label="Contact"
                        name="contact"
                        error={
                          errors.contact ? { content: errors.contact } : null
                        }
                        placeholder="Enter Contact"
                        onChange={handleChange}
                        value={contact}
                      />
                    </Form.Group>
                  </Col>
                  {/* <br /> */}
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      label="FileUpload"
                      type="file"
                      accept="image/*"
                      name="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </Form.Group>
                </Row>
                </Container>
                <br />
                <Button
                  variant="success"
                  type="submit"
                  disabled={progress !== null && progress < 100}
                >
                  Submit
                </Button>
              </Form>
            </>
          )}
        </div>
    </>
  );
};
export default ProductForm;