import React, {Component} from 'react';
import Buscador from './components/Buscador'


class App extends Component {

  datosBusqueda = (termino) => {
    console.log(termino);
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron mt-2">
          <p className="lead text-center">Buscador de imagenes</p>

          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />

        </div>
      </div>
    );
  }
}
export default App;
