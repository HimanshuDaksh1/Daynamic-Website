import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from './Layout'
export default function About() {
  return (
    <Layout>
      <Container fluid className='bgCard'>
        <Container>
          <h1>LOREM IPSUM DOLOR SIT AMET ADIPISCING ELIT SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE.</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure.</p>
          <Row>
            <Col md={6}>
              <img className='img-fluid' src='imgs/p1.jpg' style={{ width: "470px", height: "470px" }} alt='img' />
            </Col>
            <Col md={6}>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem enim ad minima.

                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat inventore veritatis.</p>
            </Col>
          </Row>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem enim ad minima quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint molestiae.
          </p>
          <hr />
          <Row className='aboutText'>
            <h1>What can we do for you?</h1>
            <Col md={3}>
              <div className='aboutNo'>
                1
                <h5>ACCUSAMUS IUSTO</h5>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam</p>
            </Col>
            <Col md={3}>
              <div className='aboutNo'>
                2
                <h5>ACCUSAMUS IUSTO</h5>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam</p>
            </Col>
            <Col md={3}>
              <div className='aboutNo'>
                3
                <h5>ACCUSAMUS IUSTO</h5>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam</p>
            </Col>
            <Col md={3}>
              <div className='aboutNo'>
                4
                <h5>ACCUSAMUS IUSTO</h5>
              </div>
              <p>Sed ut perspiciatis unde omnis iste natus aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam</p>
            </Col>
          </Row>
        </Container>
      </Container>

    </Layout>
  )
}
