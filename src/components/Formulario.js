
import { useState } from 'react';


const Formulario = () => {
    

// state del formulario
    const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: '',
})

// State de validacion de ingreso de datos
const [error, guardaError] = useState (false);

// extraer ciudad y pais
const { ciudad, pais } = busqueda;

// funcion que coloca los elementos en el state
const handleChange = e => {
    // actualizamos el state
    guardarBusqueda ({
        ...busqueda, 
            [e.target.name] : e.target.value
        
    });
}

// cuando el usuario de click al form
const handleSubmit = e => {
    e.preventDefault();

    // Validar
    if (ciudad.trim() === '' || pais.trim() === '') {
        guardaError(true);
        return
    }
    guardaError(false);



    // Pasarlo al componente principal


}
    
    
    return ( 
        <form
            onSubmit={handleSubmit}    
        >
            {error ? <p className="red darken-4 error">Todos los Campos son Obligatorios</p> : null }
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>

            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="" >--Seleccione un Pais </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                
                </select>
                <label htmlFor="pais">Pais:</label>

                
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />

            </div>

        </form>

     );
}
 
export default Formulario;