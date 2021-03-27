import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import {useState, useEffect} from 'react';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  const [consultar, guardarConsultar] = useState (false);
  const [resultado, guardadrResultado] = useState({});

  const { ciudad , pais } = busqueda;

  useEffect (() => {
    const consultarAPI = async () => {

    if (consultar) {
      const appid = '24f486c3ddc747534961136ccf8d8404';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardadrResultado(resultado);
      guardarConsultar(false);
    }
      
    }
    consultarAPI();
  },[consultar]);



  return (
    <>
      <Header 
        titulo='Conoce el Clima de tu Ciudad'
      />
      <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col m6 s12">
                    <Formulario
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                      guardarConsultar={guardarConsultar}
                    />
                  </div>
                  <div className="col m6 s12">
                    <Clima
                      resultado={resultado}
                    />
                  </div>
              </div>
          </div>
      </div>

    </>
  );
}

export default App;
