import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { mainMenuFun } from './Collection';
import { useState, useEffect } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
export default function Header(props) {


  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "times"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setMenuData(querySnapshot.docs.map((doc) => doc.data()));
      console.log(menuData);
    };
    fetchData();
  }, []);


  return (
    
   <>
   <Navbar  variant="dark"  sticky="top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{color:"yellow",fontSize:"2rem"}}><b>{menuData.map((item) => (
                <div md={4} key={item.id}
              ><h3>{item.companyname}</h3>
               
                </div>
              ))}</b> 
         </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
          {menuData.map((item) => (
              <Link id='navMenu' className="nav-link" to={`/${item.path}`} key={item.id}>
                <h4>{item.menu}</h4>
              </Link>
            ))}
          </Nav>
          <Nav  className='ms-auto'>
          <Link className="topIcon" to="/admin"><FaUserGraduate/></Link> 
          </Nav>
         </Navbar.Collapse>
         </Container>
         </Navbar>   
   </>
  )
}
