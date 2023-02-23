import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const pages = [{
    page: "HOME",
    path: "/",
},
{
    page: "NEWS",
    path: "/news",
}
    , {
    page: "ABOUT",
    path: "/about",
},
{
    page: "OUR PROJACTs",
    path: "/OurProjact",
},
{
    page: "CONTACT",
    path: "/Contact",

}
]

const card = [
    {
        image: "imgs/im1.jpg",
        text1: "ELIT EIUSMOD TEMPOR",
        text2: "IRURE DOLOR VOLUPTATE",
        text3: "Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos qui ratione voluptatem sequi.",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/im2.jpg",
        text1: "ELIT EIUSMOD TEMPOR",
        text2: "IRURE DOLOR VOLUPTATE",
        text3: "Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos qui ratione voluptatem sequi.",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/im3.jpg",
        text1: "ELIT EIUSMOD TEMPOR",
        text2: "IRURE DOLOR VOLUPTATE",
        text3: "Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos qui ratione voluptatem sequi.",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/im4.jpg",
        text1: "ELIT EIUSMOD TEMPOR",
        text2: "IRURE DOLOR VOLUPTATE",
        text3: "Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit fugit consequuntur magni dolores eos qui ratione voluptatem sequi.",
        cardIcon: <FaArrowRight />
    }
]

const subfooter = [
    {
        text1: "About Us",
        text2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque ipsa quae illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo ipsam voluptatem quia voluptas aspernatur.",
    },
    {
        text1: "High Quality",
        text2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque ipsa quae illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo ipsam voluptatem quia voluptas aspernatur.",
    },
    {
        text1: "Safty Control",
        text2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque ipsa quae illo inventore veritatis quasi architecto beatae vitae dicta explicabo nemo ipsam voluptatem quia voluptas aspernatur.",
    },
]

const projactCard = [
    {
        image: "imgs/p9.jpg",
        text1: "LOREM IPSUM DOLOR SIT AMET",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p8.jpg",
        text1: "CONSECTETUR ADIPISICING ELIT",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p7.jpg",
        text1: "REPELLAT FUGIT TENETUR",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p6.jpg",
        text1: "ASPERIORES QUAS VOLUPTATEM",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p5.jpg",
        text1: "EX QUOS AB PERSPICIATIS",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p4.jpg",
        text1: "NATUS DOLORES AD ET IPSAM",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p3.jpg",
        text1: "HIC NISI. ANIMI PLACEAT",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p2.jpg",
        text1: "OBCAECATI QUAM",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
    {
        image: "imgs/p1.jpg",
        text1: "QUAM EXERCITATIONEM",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        cardIcon: <FaArrowRight />
    },
]

const newsCard=[
    {
        image: "imgs/p9.jpg",
        text1: "LOREM IPSUM DOLOR SIT AMET",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
    },
    {
        image: "imgs/p8.jpg",
        text1: "CONSECTETUR ADIPISICING ELIT",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
    },
    {
        image: "imgs/p7.jpg",
        text1: "REPELLAT FUGIT TENETUR",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
    },
    {
        image: "imgs/p6.jpg",
        text1: "ASPERIORES QUAS VOLUPTATEM",
        text2: "Maecenas dictum suscipit",
        text3: "Sed ut perspiciatis unde omnis iste natus accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
    }
]


const cardNewsfun = ((data) => {
    return (
        <Card className="ha" style={{ width: '18rem', margin: "auto", backgroundColor: "rgb(37, 37, 37)"}}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title className='cardText1'><h5>{data.text1}</h5></Card.Title>
                <Card.Text className='cardText2'>
                    {data.text2}
                </Card.Text>
                <div className='cardText3'> {data.text3}</div>
                <div className='cardIcon' > {data.cardIcon}</div>
            </Card.Body>
        </Card>

    )
})
export const mainCardNewsFun = newsCard.map(cardNewsfun)



const cardProjactfun = ((data) => {
    return (
        <Card className="ha" style={{ width: '22rem', margin: "auto", backgroundColor: "rgb(37, 37, 37)" }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title className='cardText1'><h5>{data.text1}</h5></Card.Title>
                <Card.Text className='cardText2'>
                    {data.text2}
                </Card.Text>
                <div className='cardText3'> {data.text3}</div>
                <div className='cardIcon' > {data.cardIcon}</div>
            </Card.Body>
        </Card>

    )
})
export const mainCardProjactFun = projactCard.map(cardProjactfun)


const mainFooter = ((item) => {
    return (
        <>
            <Col md={4}>
                <h3>{item.text1}</h3>
                <p>{item.text2}</p>
                <button className='batn'>Read More</button>
            </Col>
        </>
    )
})
export const subMainFooter = subfooter.map(mainFooter)
const cardItemfun = ((data) => {
    return (

        <Card className="ha" style={{ width: '18rem', margin: "auto", backgroundColor: "rgb(37, 37, 37)" }}>
            <Card.Img variant="top" src={data.image} />
            {/* <Card.Body>
                <Card.Title className='cardText1'><h5>{data.text1}</h5></Card.Title>
                <Card.Text className='cardText2'>
                    {data.text2}
                </Card.Text>
                <div className='cardText3'> {data.text3}</div>
                <div className='cardIcon' > {data.cardIcon}</div>
            </Card.Body> */}
        </Card>
    )
})
export const mainCardFun = card.map(cardItemfun)

const navItemfun = ((item) => {
    return (

        <Link className='navitem' to={item.path}>{item.page}</Link>

    )
})
export const mainMenuFun = pages.map(navItemfun)

