import React from 'react'
import { Container, Button, Menu, Image } from 'semantic-ui-react'
import { useNavigate, Link } from 'react-router-dom'
export default function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <Menu inverted borderless style={{ padding: "0.3rem", marginBottom: "20px" }}>

                <Container>
                    <Menu.Item name='home'>
                        <Menu.Item>
                           <h1> Our Projacts Update and Delete</h1>
                        </Menu.Item>
                    </Menu.Item>
                    <Menu.Item position='right'>

<Button size="mini" praymary onClick={() => navigate("/add")}>Add Projact</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </>
    )
}
