import React, { useState } from 'react'
import { usePacients } from '../../store';
import { EditarPaciente } from './EditarPaciente';
import Paciente from './Paciente';

const Info = () => {
  const { pacients, setPacients } = usePacients();
  const [result, setResult] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editPacient,setEditPacient] = useState({})


  function handleEliminar(index) {
    const nuevosElementos = pacients.filter((elemento, i) => i !== index);
    console.log(nuevosElementos)
    setPacients(nuevosElementos);
  }

  const handleEditClick = (pacienttoEdit) => {
    setIsEditing(true);
    setEditPacient(pacienttoEdit);

    };



  console.log(pacients)

  return (
    <div>
      <div className="buscador d-flex mt-5">
        <h6>Buscar paciente por nombre o apellido :</h6>
        <input className='form-control form-control-sm input-nombre' type="text" onChange={(e) => { setResult((e.target.value).toLowerCase()) }} />
      </div>
      <div className='mt-5'>
        <ul className='contenedor-pacientes'>
          {
              pacients.filter((paciente) => {
                let filterPacient= (paciente.name).toLowerCase();
                if (filterPacient.includes(result)) {
                  return paciente
                }
                return false
            }).map(
              (paciente, index) => {
                return (
                  
                  <li key={index} className='item'>
                   
                   { isEditing  && editPacient.id === paciente.id ?
              
              <EditarPaciente paciente={editPacient} pacients={pacients} setPacients={setPacients} editPacient={editPacient} setEditPacient={setEditPacient} isEditing={isEditing} setIsEditing={setIsEditing} setResult={setResult} />
                    :
                    <Paciente paciente={paciente} handleEditClick={() => handleEditClick(paciente)} handleEliminar={() => handleEliminar(paciente.id)} />
                    
              }
                  </li>

                );


              })



          }
        </ul>
      </div>

    </div>
  )
}

export default Info