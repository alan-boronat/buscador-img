import React, { Component } from 'react';

class Buscador extends Component {
    
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        // Tomamos el valor del input y lo enviamos al componente principal
        const termino  = this.busquedaRef.current.value;

        this.props.datosBusqueda(termino);
    }

    render() { 
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen aqui. Ejemplo: Fútbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
        );
    }
}
 

export default Buscador;