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
    http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=c11a5e2033f0f29d1b7944c7a5563668
    }
    consultarAPI();
  },[consultar]);



  return (
    <>
      <Header 
        titulo='Clima React App'
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
