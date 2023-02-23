import React from 'react'
import { Modal, Header, Image, Button } from 'semantic-ui-react'
export default function ModalCamp({ open, setOpen, img, name, info, email, contact, id, handleDelete }) {
    return (
        <Modal  onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
            <Modal.Header>Projact Deatels</Modal.Header>
            <Modal.Content image>
                <Image
                    size='medium'
                    src={img} wrapped
                />
            <Modal.Description>
                    <Header>{name}</Header>
                    <p>{email}</p>
                    <p>{info}</p>
                    <p>{contact}</p>
                </Modal.Description>
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>Cancel</Button>
                    <Button content="Delete" labelPosition='right' color='red'
                    icon="checkmark" onClick={() => handleDelete(id)}>Delete</Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
    )
}
