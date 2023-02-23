import Layout from './Layout'
// import { mainCardNewsFun } from './Collection'
import { Container, Row, Card } from 'react-bootstrap'

import React, { useEffect, useState } from "react";
// import "./pages.css";
// import MainLayout from "./MainLayout";
import { useNavigate, useParams } from "react-router-dom";
import { collection,  onSnapshot } from "firebase/firestore";
import { db } from "../Components/firebase";
export default function News() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "news"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNews(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  return (
    <Layout>
      <Container fluid className='bgCard'>
        <Container>
          <h1>SEPTEMBER</h1>
          <Row>
          {news &&
                    news.map((item) => (
                      <Card className="ha" style={{ width: '18rem', margin: "auto", backgroundColor: "rgb(37, 37, 37)"}}>
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title className='cardText1'><h5>{item.name}</h5></Card.Title>
                          <Card.Text className='cardText2'>
                              {item.email}
                          </Card.Text>
                          <div className='cardText3'> {item.info}</div>
                          <div className='cardIcon' > {item.contact}</div>
                      </Card.Body>
                  </Card>
                    ))}
          </Row><hr/>
        </Container>
      </Container>

    </Layout>
  )
}
