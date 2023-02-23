import React, { useEffect, useState } from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import Layout from './Layout'
import { db } from '../Components/firebase'

// import {mainCardProjactFun} from './Collection'
import { collection, onSnapshot } from 'firebase/firestore';

export default function OurProjact() {




  const [users, setUsers] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [user,setUser] = useState({})
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate();
  useEffect(() => {
    // setLoading(true);
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      });
      setUsers(list);
      // setLoading(false);
    },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    }
  }, []);




  return (
    <Layout>
      <Container fluid className='bgCard'>
        <Container>
          <Row>
            <h1>ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT.</h1>
            <p>Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
          
            {/* {mainCardProjactFun} */}
            {users && users.map((item) => {
              return (
                <Card className="ha" style={{ width: '18rem', margin: "auto", backgroundColor: "rgb(37, 37, 37)"}}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title className='cardText1'><h5>{item.name}</h5></Card.Title>
                    <Card.Text className='cardText2'>
                        {item.info}
                    </Card.Text>
                    <div className='cardText3'> {item.email}</div>
                    <div className='cardIcon' > {item.contact}</div>
                </Card.Body>
            </Card>

                )
              })}
          </Row>
        </Container>
        <hr/>
      </Container>

    </Layout>
  )
}
