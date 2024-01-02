import React from 'react'
import Button from 'react-bootstrap/Button';


const Paciente = ({ paciente, handleEditClick,handleEliminar }) => {
    return (
        <div className="card" >
            <h6>Nombre: {paciente.name}  </h6>
            <p>Email: {paciente.email}  </p>
            <p>Telefono: {paciente.phone} </p>
            <p>Direccion: {`${paciente.address.street} ${paciente.address.suite}`} </p>
            <div className='cont-button'>
            <Button onClick={handleEditClick } variant="primary">Editar</Button>
            <Button  onClick={() => { handleEliminar(paciente.id) }} variant="primary">Eliminar</Button>

                {/* <button className='btn btn-outline-primary' onClick={handleEditClick }>Editar</button>
                <button className='btn btn-outline-primary' onClick={() => { handleEliminar(paciente.id) }}>Eliminar</button> */}
            </div>
        </div>
    )
}

export default Paciente