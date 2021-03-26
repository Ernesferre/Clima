import Header from './components/Header';
import Formulario from './components/Formulario';
import {useState, useEffect} from 'react';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  const [consultar, guardarConsultar] = useState (false);

  const { ciudad , pais } = busqueda;

  useEffect (() => {
    const consultarAPI = async () => {

    if (consultar) {
      const appid = '24f486c3ddc747534961136ccf8d8404';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
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
                    2
                  </div>
              </div>
          </div>
      </div>

    </>
  );
}

export default App;
