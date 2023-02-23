import React from 'react'
import Layout from './Layout'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import { mainCardFun } from './Collection'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { subMainFooter } from './Collection'
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";


export default function Home() {

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
      <Layout>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/pic1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="bannerBox">
              {menuData.map((item) => (
                <h1 className='bannerText'>{item.bannertext}</h1>
              ))}
              </div><br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/pic2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="bannerBox">
              {menuData.map((item) => (
                <h1  className='bannerText'>{item.bannertext}</h1>
              ))}
              </div><br />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="imgs/pic3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <div className="bannerBox">
              {menuData.map((item) => (
                <h1  className='bannerText'>{item.bannertext}</h1>
              ))}
              </div><br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Card */}
        <Container fluid className='bgCard'>
          <Container>
            <Row style={{ margin: "auto" }}>
              <h1>OUR LATEST PROJACTS</h1>
              {mainCardFun}
              {menuData.map((item) => (
                <Card.Body>
                <Card.Title className='cardText1'><h5>{item.cardtext1}</h5></Card.Title>
                <Card.Text className='cardText2'>
                    {item.cardtext2}
                </Card.Text>
                <div className='cardText3'> {item.cardtext3}</div>
            </Card.Body>
              ))}
            </Row>
          </Container>
        </Container>
        <img src='imgs/pic3.jpg' className='bgpic' alt="img" />
        <Container fluid className='bgCard'>
          <Container>
            <Row>
              {menuData.map((item) => (
                <Col md={4} key={item.id}
              ><h3>{item.name}</h3>
                  <p>{item.username}</p>
                  {/* <p>{item.name}</p> */}
                  <button className='batn'>Read More</button>
                </Col>
              ))}

            </Row>
            <hr />
            <Row>
              <Col md={6}>
                <h1>TESTIMONIALS</h1>
                <p>Fuga provident modi illo dolorum, neque labore natus ratione, totam id sequi vero repudiandae velit nemo nobis corporis tenetur. Magnam velit est cumque incidunt unde delectus labore inventore eaque vitae?
                </p>
                <p style={{ color: "yellow" }}>Jessica Waton</p>
              </Col>
              <Col md={6}>
                <h1>LATEST NEWS</h1>
                <p style={{ color: "yellow" }}>30/12/2022</p>
                <p className='fotpera'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim...</p>
                <p style={{ color: "yellow" }}>30/12/2022</p>
                <p className='fotpera'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur...</p>
              </Col><hr />
            </Row>
          </Container>
        </Container>
      </Layout>
    </>
  )
}

