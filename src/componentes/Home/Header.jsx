import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../store';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsHospital } from "react-icons/bs";


const Header = ({ handleClickEventHome }) => {

    const { isLogged, setIsLogged } = useAuth();
    console.log(isLogged)


    return (
        <>
            <Navbar bg="primary" className='header' fixed='top' >
                <Container >
                    <Navbar.Brand href="#home"> <h1><BsHospital/></h1> </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Link className="nav-link " onClick={handleClickEventHome} to='/'>Home</Link>

                        {isLogged ? <>
                            <Link className="nav-link" to='/pacientes'>Pacientes</Link>
                            <Link className="nav-link" to='/turnos'>Turnos</Link>
                            <Link className="nav-link" to='indice'>Indice</Link>
                            <Link to='/' onClick={() => setIsLogged(false)} className='btn btn-primary'>Cerrar sesion </Link>
                        </>
                            :
                            <Link to='/login' className='btn btn-primary'>Iniciar sesión</Link>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default Header