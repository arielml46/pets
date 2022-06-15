import React, { Component } from 'react';
import axios from 'axios';
import { Navigate} from 'react-router-dom';
import { Modal } from 'reactstrap';

export default class InsertarPet extends React.Component {

    txtIdRef = React.createRef();
    txtNomRef = React.createRef();
    txtStatusRef = React.createRef();
    txtImgRef = React.createRef();

    state = { status: false }

    nuevaPet = (e) => {
        e.preventDefault();
        var nom = this.txtNomRef.current.value;
        var status = this.txtStatusRef.current.value;
        var img = this.txtImgRef.current.value;
        var mascota = {
            nombre: nom
            ,status: status
            , imagen: img
        };
        var url = 'https://petstore.swagger.io/v2/pet';
        axios.post(url, mascota).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Navigate to="/" />
        }
        return (
            <Modal />
        
        )
    }
}