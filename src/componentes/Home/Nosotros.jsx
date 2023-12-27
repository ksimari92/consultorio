import React from 'react'
import { useStore } from '../../store'
import Medico from './Medico';

const Nosotros = () => {
    const { users } = useStore();

    return (
        <div  className='container nosotros mt-5'>
            <h2 style={{marginTop: "7%"}} className='subtitulo-home'>¿Quienes sómos?</h2>
            <div className="doctor-container">
                {users.map(
                    (user, index) => {
                        return <Medico key={index} user={user} />
                    }
                )
                }
            </div>
        </div>
    )
}

export default Nosotros