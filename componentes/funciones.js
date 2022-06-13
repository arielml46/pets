import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, element } from 'react-router-dom';
import Pets from './Pets';
import InsertarPet from './InsertarPet';
console.reportErrorsAsExceptions = false;
/*import Detalles from './CrudPeliculas/DetallesPelicula';*/


/*import Update from './CrudPeliculas/UpdatePet';
import Delete from './CrudPeliculas/DeletePet';*/

export default class funciones extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Pets/>} />
                        <Route exact path="/create" element={InsertarPet} />
                    


                        <Route exact path="/update/:id" render={props => {
                            var id = props.match.params.id;
                            return <UpdatePet id={id} />
                        }} />
                        <Route exact path="/delete/:id" render={props => {
                            var id = props.match.params.id;
                            return <DeletePet id={id} />
                        }}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}