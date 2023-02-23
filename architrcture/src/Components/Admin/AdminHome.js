import React, { useState, Fragment } from "react";
import AddUserForm from "./AddUserForm"
import EditUserForm from "./EditUserForm"
import UserTable from "./UserTable"
import firebase from '../firebase'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



const AdminHome = () => {


  
  
  // Data
  const usersData = [{ id: null,menu:"", path:"", companyname:"" , name: "", username: ""}];
  const initialFormState = { id: null,menu:"", path:"", companyname:"", name: "", username: ""  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    firebase
      .firestore()
      .collection("times")
      .add({
        menu:user.menu,
        path:user.path,
        companyname: user.companyname,
        bannertext:user.bannertext,
        cardtext1:user.cardtext1,
        cardtext2:user.cardtext2,
        cardtext3:user.cardtext3,
        name: user.name,
        username: user.username
      })
      .then(() => {
        //setTitle("");
        //setTime("");
      });
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = updatedUser => {
    setEditing(false);
    firebase
      .firestore()
      .collection("times")
      .doc(updatedUser.id)
      .set(updatedUser);
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, menu:user.menu, path:user.path, companyname:user.companyname, bannertext:user.bannertext, name: user.name, username: user.username });
    //console.log("editRow", user);
  };

  return (
    <Container>
      <Row>
<Col sm={12}>
    <div style={{textAlign:"center"}} className="container">
    <h1>Home</h1>
      <div className="homeAdmin">
     
      <div className="flex-row">
       
        <div className="flex-large">
          {editing ? (
            <Fragment>
              
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      </div>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default AdminHome;
