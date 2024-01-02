import React, { useState } from 'react'
import './Home.css'
import Header from './Header'
import Galeria from './Galeria'
import Contacto from './Contacto'
import Nosotros from './Nosotros'

const Home = () => {
  // const [isTrue, setIsTrue] = useState(false);

  // const handleClickEventHome = () => {
  //   if (isTrue) {
  //     setIsTrue(false)
  //   } else if (!isTrue) {
  //     setIsTrue(true)
  //   }
  // }

  return (

      <>
        <Nosotros />
        <Galeria />
        <Contacto />
      </>

  )
}

export default Home