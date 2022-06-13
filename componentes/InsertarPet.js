import React, { Component } from 'react';
import axios from 'axios';
import { Navigate} from 'react-router-dom';

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
        var url = 'https://petstore.swagger.io/v2/pet' + '/mascotas';
        axios.post(url, mascota).then(res => {
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Navigate to="/" />
        }
        return (
            <div>
                <h1>Nueva Mascota</h1>
                <form onSubmit={this.nuevaPet} style={{width: "50%", margin: "auto"}}>
                    <label>Nombre: </label>
                    <input type="text" name="txtnom" className="form-control" ref={this.txtNomRef} />
                    <label>Director: </label>
                    <input type="text" name="txtstatus" className="form-control" ref={this.txtStatusRef} />
                    <label>Clasificación: </label>
                    <input type="text" name="txtImg" className="form-control" ref={this.txtImgRef} /><br />
                    <button className="btn btn-success">Agregar</button>
                </form>
            </div>
        )
    }
}