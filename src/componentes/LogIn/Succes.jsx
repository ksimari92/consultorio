import React from 'react'
import { Link } from 'react-router-dom'

const Succes = () => {
  return (
    <div>
        <h1 className='titulo-bienvenida'>¡Bienvenido al Consultorio!</h1>
        {/* <img className='img-bienvenida' src={bienvenido} alt="foto bienvenida" /> */}

        <Link to='/' className='btn btn-primary'>Ir al Home</Link>
    </div>
    
  )
}

export default Succes