import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';


class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=19435393-b586ecc610c072877cf7c053b&q=${termino}`;

    /* console.log(url); */
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits }) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
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
        <Resultado 
          imagenes={this.state.imagenes}
        />
      </div>
    );
  }
}
export default App;
