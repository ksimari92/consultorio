import React from 'react'
import foto1 from '../../assets/img/medic1.jpg'
import foto2 from '../../assets/img/medic2.jpg'
import foto3 from '../../assets/img/medic3.jpg'

const Galeria = () => {
    return (
        <div>
            <h2 className='subtitulo-home'> Instalaciones y servicios </h2>
            <div className='galeria mt-3'>
                <img src={foto1} alt="" />
                <img src={foto2} alt="" />
                <img src={foto3} alt="" />

            </div>

        </div>
    )
}

export default Galeria