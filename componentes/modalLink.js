
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from "reactstrap";
import InsertarPet from './InsertarPet';


const modalLink = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  

  return (

    
    <div style={{ textAlign: "left" }}>
      <Button color='success' onClick={toggle}>Agregar Pet</Button>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader>Agregar New Pet</ModalHeader>
        <ModalBody style={{
          height: "100%",
          width: "100%",
          borderStyle: "none",
          borderRadius: "1px",
        }}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">
                Nombre Mascota
              </Label>
              <Input
                id="exampleEmail"
                name="txtnom"
                placeholder="Nombre de la mascota"
                type="email"
                ref={InsertarPet.txtNomRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                Status
              </Label>
              <Input
                id="exampleSelect"
                name="txtstatus"
                type="select"
                ref={InsertarPet.txtstatus}
              >
                <option>
                  Available
                </option>
                <option>
                  Pending
                </option>
                <option>
                  Sold
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                URL de la foto
              </Label>
              <Input
                id="exampleEmail"
                name="txtImg"
                placeholder="URL de la imagen"
                type="email"
                ref={InsertarPet.txtImgRef}
              />
            </FormGroup>
          </Form>

        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Cancelar{" "}
          </Button>
          <Button component={'InsertarPet'} element={'InsertarPet'} color="success" onClick={toggle}>
            Agregar{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default modalLink;