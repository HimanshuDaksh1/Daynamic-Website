import React, { useState } from "react";
import { Button,Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const AddUserForm = props => {
  const initialFormState = {
    id: null,
    menu:"",
    path:"",
    companyname:"",
    bannertext:"",
    cardtext1:"",
    cardtext2:"",
    cardtext3:"",
    name: "", 
    username: "" 
  };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
let navigate = useNavigate();
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
        navigate("/admin")
      }}
    >
      
<Container>
  <Row>
  <Col md={2}>
  <div className="homeInput">

    <h1>Company Name</h1>
  <Form.Label>Company Name</Form.Label>
      <Form.Control
        type="text"
        name="companyname"
        value={user.companyname}
        onChange={handleInputChange}
      />
       </div>
  </Col>
 
<Col md={2}>

  <div className="homeInput">

<h1>Navbar</h1>
<Form.Label>Menu</Form.Label>
      <Form.Control
        type="text"
        name="menu"
        value={user.menu}
        onChange={handleInputChange}
      />
<Form.Label>Path</Form.Label>
      <Form.Control
        type="text"
        name="path"
        value={user.path}
        onChange={handleInputChange}
      />
       </div>

</Col>
      <Col md={2}>
  <div className="homeInput">

      <h1>Banner</h1>
      <Form.Label>Banner Text</Form.Label>
      <Form.Control
        type="text"
        name="bannertext"
        value={user.bannertext}
        onChange={handleInputChange}
      />
       </div>

      </Col>
<Col md={2}>   
  <div className="homeInput">

<h1>Card</h1>
<Form.Label>Card Text 1 </Form.Label>
      <Form.Control
        type="text"
        name="cardtext1"
        value={user.cardtext1}
        onChange={handleInputChange}
      /><Form.Label>Card Text 2 </Form.Label>
      <Form.Control
        type="text"
        name="cardtext2"
        value={user.cardtext2}
        onChange={handleInputChange}
      /><Form.Label>Card Text 3 </Form.Label>
      <Form.Control
        type="text"
        name="cardtext3"
        value={user.cardtext3}
        onChange={handleInputChange}
      />
       </div>
      </Col>
      <Col md={2}>
  <div className="homeInput">

      <h1>Card Below</h1>
      <Form.Label>HeadIng</Form.Label>
      <Form.Control
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <Form.Label>Pragraph</Form.Label>
      <Form.Control
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
       </div>

      </Col>
  </Row>
</Container>
<div  style={{alignItems:"center"}} >
      <Button type="submit">Add</Button>
      </div>
    </Form>
  );
};
export default AddUserForm;
