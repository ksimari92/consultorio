import React, { useEffect, useState } from 'react';
import { useStore } from '../../store';
import { useAuth } from '../../store';
// import './Login.css';
import Success from './Succes';
import Error from './Error';

const Login = () => {
  const { users } = useStore();
  const { isLogged, setIsLogged } = useAuth();
  const [loginError, setLoginError] = useState(false); 
  const [user, setUser] = useState({
    email: null,
    pass: null
  });

  useEffect(() => {
    console.log(users);
  }, [users]);

  const handleChangeInputEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value
    });
  };

  const handleChangeInputPass = (e) => {
    setUser({
      ...user,
      pass: e.target.value
    });
  };

  const validarDatos = (e) => {
    e.preventDefault();
    let found = false; 
    users.forEach((item) => {
      if (user.email === item.email && user.pass === item.id.toString()) {
        setIsLogged(true);
        found = true;
      }
    });

    if (!found) {
      setLoginError(true);
    }
  };

  return (
    <>
      {isLogged ? (
        <Success />
      ) : (
        <>
          <h1>Bienvenido</h1>
          <form action="" className='form-group mt-5 mb-3' onSubmit={validarDatos}>
            <input type="text" placeholder='Usuario' className='form-control mb-3' onChange={handleChangeInputEmail} />
            <input type="password" placeholder='Ingrese su clave' className='form-control mb-3' onChange={handleChangeInputPass} />
            <input type="submit" value="Iniciar sesión" className='btn btn-primary mb-5' />
          </form>
          {loginError && <Error />}
        </>
      )}
    </>
  );
};

export default Login;