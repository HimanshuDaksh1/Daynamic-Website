import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Button, Card, Grid, Container, Image } from 'semantic-ui-react'
import NavBar from "./OurProjact/NavBar"
import { useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import ModalCamp from './OurProjact/ModalCamp';
import Spiner from './OurProjact/Spiner';
export default function AdminOurProjact() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [user,setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();




  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      });
      setUsers(list);
      setLoading(false);
    },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    }
  }, []);



if(loading) {
  return <Spiner/>
}



  const handleModal=(item)=>{
    setOpen(true);
    setUser(item)
  }


const handleDelete = async(id)=>{
  if(window.confirm("Are You  sure to delete that user ?")){
    try{
      setOpen(false);
      await deleteDoc(doc(db,"users", id));
      setUsers(users.filter((user)=>user.id !== id));
    }
    catch(err) {
      console.log(err);
    }
  }
}


  return (
    <>
      <NavBar />
      <Container>
          <Grid columns={3} stackable>
            {users && users.map((item) => {
              return (
                <Grid.Column>
                <Card key={item.id}>
                  <Card.Content>
                    <Image
                      src={item.img}
                      size="medium"
                      style={{
                        height: "150px",
                        width: "150px",
                        borderRadius: "50%",
                      }}
                    />
                    <Card.Header 
                    style={{marginTop:"10px"}}
                    >
                    {item.name}
                    </Card.Header>
                    <Card.Description>{item.info}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div>
                      <Button 
                      color="green" 
                      onClick={()=>navigate(`/update/${item.id}`)}>
                        Update
                      </Button>
                      <Button 
                      color="purple" 
                      onClick={()=> handleModal(item)}
                      >
                        Viwe
                      </Button>
                      {open && (
                        <ModalCamp
                      open={open}
                      setOpen={setOpen}
                      handleDelete={handleDelete}
                      {...user}
                      />)}
                    </div>
                  </Card.Content>
                </Card>
              </Grid.Column>
              )
            })}
          </Grid>
      </Container>
    </>
  )
}
