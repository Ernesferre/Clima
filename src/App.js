import Header from './components/Header';
import Formulario from './components/Formulario';
import {useState, useEffect} from 'react';


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  const { ciudad , pais } = busqueda;

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
