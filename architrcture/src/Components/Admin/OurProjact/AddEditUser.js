import React, { useEffect, useState } from 'react'
import { Button,Form, Grid, Loader  } from 'semantic-ui-react'
import {db, storage} from '../../firebase'
import { useParams,useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'

const initialState ={
  name:"",
  email:"",
  info:"",
  contact:"",
}
export default function AddEditUser() {
const [data,setData] =useState(initialState)
const {name, email, info,contact}= data;
const [file,setFile] =useState(null)
const [progress,setProgress] =useState(null)
const [errors,setErrors] =useState({});
const [isSubmit,setIsSubmit] =useState(false)
const {id} = useParams();

useEffect(()=>{
  id && getSinagalUser  ();
},[id])

const getSinagalUser = async () =>{

  const docRef = doc(db, "users",id);
  const snapshot = await getDoc(docRef);
  if(snapshot.exists()){
    setData({...snapshot.data()});
  }
}


const navigate = useNavigate();
useEffect(()=>{
const UploadFile =()=>{
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",(snapshot)=>{
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
    setProgress(progress);
    switch (snapshot.state){
      case "paused":
        console.log("Upload Is Pause");
        break;
        case "running":
        console.log("Upload Is Running");
        break;
        default:
        break;
    };
  },(error)=>{
    console.log(error)
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((dwonloadURL)=>{
      setData((prev)=>({...prev, img: dwonloadURL}))
    });
  }
  );
};
file &&  UploadFile();
},[file])


const handleChange =(e)=>{
setData({...data,[e.target.name]:
   e.target.value});
}
const validate =()=>{
  let errors ={};
  if(!name){
    errors.name ="Name Is Required"
  }
  if(!email){
    errors.email ="Email Is Required"
  }
  if(!info){
    errors.info ="Info Is Required"
  }
  if(!contact){
    errors.contact ="Contact Is Required"
  }
  return errors;
};
const handleSubmit = async(e)=>{
e.preventDefault();
let errors = validate();
if(Object.keys(errors).length) return setErrors(errors);
setIsSubmit(true);
if(!id){
  try{
    await addDoc(collection(db,"users"),{
      ...data,
      timestamp: serverTimestamp()
    });
  } catch(error){
    console.log(error)
  }
}
else{
  try{
    await updateDoc(collection(db,"users", id),{
      ...data,
      timestamp: serverTimestamp()
    });
  } catch(error){
    console.log(error)
  }
}

navigate("/adminourprojact")
  }
  return (
    <div>
      <Grid centered verticalAlign='middle' columns='3' style={{height:"80vh"}}>
        <Grid.Column textAlign='center'>
          <div>
            {isSubmit ? <Loader active inline="centered" size="huge"/>:(
              <>
              <h2>{id ? "Update User": "Add User"}</h2>
              <Form onSubmit={handleSubmit}>
              <Form.Input 
              label="Name"
              error={errors.name ? {content: errors.name}: null}
              placeholder="Enter Projact Name"
              name="name"
              onChange={handleChange}
              value={name}
              autoFoucs
               />
              <Form.Input 
              label="Email"
              error={errors.email ? {content: errors.email}: null}
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
              value={email}
               />
              <Form.Input 
              label="Info"
              error={errors.info ? {content: errors.info}: null}
              placeholder="Enter Info"
              name="info"
              onChange={handleChange}
              value={info}
               />
              <Form.Input 
              label="Contact"
              error={errors.contact ? {content: errors.contact}: null}
              placeholder="Enter Contact"
              name="contact"
              onChange={handleChange}
              value={contact}
               />
              <Form.Input
              label="Upload"
              type='file'
              placeholder="Enter Contact"
              name="contact"
              onChange={(e)=>setFile (e.target.files[0])}
               />
               <Button type='submit' 
                primary  disabled={progress !== null && progress < 100}>Submit</Button>
              </Form>
              </>
            )}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}
