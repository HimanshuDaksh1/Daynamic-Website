import React, { useState, useEffect, Fragment } from "react";
import { FormControl, Col , Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from "../firebase"
function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    // unsubscribe callback when done
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      //.orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTimes(newTimes);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const UserTableRow = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleDeleteClick = id => {
    firebase
      .firestore()
      .collection("times")
      .doc(id)
      .delete();
  };

  const handleUpdateItemClick = data => {
    firebase
      .firestore()
      .collection("times")
      .doc(data.id)
      .set(data);
    props.setEditing(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return props.editing && props.currentUser.id === props.userValue.id ? (
    <Fragment>
      
          <tr key={props.userValue.id}>
          <td>
          <Form.Control
            type="text"
            name="companyname"
            value={user.companyname}
            onChange={handleInputChange}
          />
        </td>
          <td>
          <Form.Control
            type="text"
            name="Menu"
            value={user.menu}
            onChange={handleInputChange}
          />
        </td><td>
          <Form.Control
            type="text"
            name="path"
            value={user.path}
            onChange={handleInputChange}
          />
        </td>
      <td>
          <Form.Control
            type="text"
            name="bannertext"
            value={user.bannertext}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="cardtext1"
            value={user.cardtext1}
            onChange={handleInputChange}
          />
        </td> 
        <td>
          <Form.Control
            type="text"
            name="cardtext2"
            value={user.cardtext2}
            onChange={handleInputChange}
          />
        </td> 
        <td>
          <Form.Control
            type="text"
            name="cardtext3"
            value={user.cardtext3}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <FormControl
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <Button variant="danger"
            onClick={() => props.setEditing(false)}
            className="button muted-button"
          >
            Cancel
          </Button>
          <Button variant="warning"
            onClick={() => handleUpdateItemClick(user)}
            className="button muted-button"
          >
            Update
          </Button>
        </td>
      </tr>
         
    </Fragment>
  ) : (
    <Fragment>
     
       <tr key={props.userValue.id}>
       <td><h2>{props.userValue.companyname}</h2></td>
       <td><h2>{props.userValue.menu}</h2></td>
       <td><h2>{props.userValue.path}</h2></td>
       <td>{props.userValue.bannertext}</td>
       <td>{props.userValue.cardtext1}</td>
       <td>{props.userValue.cardtext2}</td>
       <td>{props.userValue.cardtext3}</td>
       <td><h2>{props.userValue.name}</h2></td>
       <td><p>{props.userValue.username}</p></td>
        <td>
          <Button variant="warning"
            onClick={() => {
              props.editRow(props.userValue);
            }}
            className="button muted-button"
          >
            Edit
          </Button>
          <Button variant="danger"
            onClick={() => handleDeleteClick(props.userValue.id)}
            className="button muted-button"
          >
            Delete
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTableRow;
