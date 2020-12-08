import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import icon from './img/magnifying32.png'

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    // leer ek state de la pagina actual
    let pagina = this.state.pagina;

    // leer si la pagina es 1, no se puede retroceder
      if(pagina === 1) return null;

    // restamos 1 a la pagina anterior
      pagina -= 1;

    // agregar el cambio al state
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      })
    //console.log(pagina);
  }

  paginaSiguiente = () => {
    // leer ek state de la pagina actual
      let pagina = this.state.pagina;

    // sumar uno a la pagina actual
      pagina += 1;

    // agregar el cambio al state
      this.setState({
        pagina
      }, () => {
        this.consultarApi();
        this.scroll();
      })
    //console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=19435393-b586ecc610c072877cf7c053b&q=${termino}&per_page=30&page=${pagina}`;

    /* console.log(url); */
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits }) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron mt-2">
          <p className="lead text-center mb-5"><img src={icon} alt=""/><strong> Search-Images App</strong></p>

          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />

        </div>
          <div className="row justify-content-center">
            <Resultado 
              imagenes={this.state.imagenes}
              paginaAnterior={this.paginaAnterior}
              paginaSiguiente={this.paginaSiguiente}
            />
          </div>
      </div>
    );
  }
}
export default App;
