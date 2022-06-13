import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ModalLink from './modalLink';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { Card } from "reactstrap";




export default class Pets extends React.Component {
  state = {
    pets: [],
    status: false

  }

cargarPets = () => {
  var url = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available&status=pending&status=sold';
  var request = "/mascotas";
  axios.get(url + request).then(res => {
    this.setState({
      pets: res.data,
      status: true
    });
  });
}


  componentDidMount() {
        this.cargarPets();
  }


  render() {

    return (
        
        <div>
            <Card inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                
            <h1 style={{ textAlign: "center" }}>Mantenimiento Mascotas</h1>
            <div style={{ marginBottom: "1rem", marginLeft: "1rem" }}>
            <ModalLink />
            </div>
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>Id Mascota</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Imagen</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.status === true &&
                    (
                        this.state.pets.map((masc, i) => {
                            return(
                                <tr key={i}>
                                    <td>{masc.id}</td>
                                    <td>{masc.name}</td>
                                    <td>{masc.status}</td>
                                    <td>{masc.photoUrl}</td>
                                    <td>
                                        <NavLink to={"/update/" + masc.id}>Modificar</NavLink>
                                    </td>
                                    <td>
                                        <NavLink to={"/delete/" + masc.id}>Eliminar</NavLink>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
            </Card>
        </div>
        
    )
}


}
