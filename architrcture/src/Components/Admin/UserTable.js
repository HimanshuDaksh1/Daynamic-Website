import React, { useState, useEffect, Fragment } from "react";
import { Table } from "react-bootstrap";
import UserTableRow from "./UserTableRow";
import firebase from "../firebase";
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

const UserTable = props => {
  const [user, setUser] = useState(props.currentUser);
  const times = useTimes();

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>Company Name</th>
          <th>Menu</th>
          <th>Path</th>
          <th>Banner Text</th>
          <th>Card Text 1</th>
          <th>Card Text 2</th>
          <th>Card Text 3</th>
          <th>Heading</th>
          <th>Pragraph </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          times.map(userValue => (
            <UserTableRow
              key={userValue.id}
              userValue={userValue}
              users={props.users}
              editRow={props.editRow}
              deleteUser={props.deleteUser}
              editing={props.editing}
              setEditing={props.setEditing}
              currentUser={props.currentUser}
              updateUser={props.updateUser}
            />
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
