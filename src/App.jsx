import React, { useState, useEffect } from 'react';
import { usePacients, useStore } from './store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componentes/Home/Home'
import Login from './componentes/LogIn/Login.jsx';
import Header from './componentes/Home/Header.jsx';
import Pacientes from './componentes/Pacientes/Pacientes.jsx';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

function App() {
  const { setUsers, users } = useStore();
  const { setPacients, pacients } = usePacients();
  const [isTrue, setIsTrue] = useState(false);

  const handleClickEventHome = () => {
    if (isTrue) {
      setIsTrue(false)
    } else if (!isTrue) {
      setIsTrue(true)
    }
  }

  const getUsers = async (url) => {
    await fetch(url)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        const persons = data.data
        setUsers(persons)
      });
  };

  const getPacients = async (url) => {
    await fetch(url)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setPacients(data)
      });
  };

  // useEffect(()=>{
  //   console.log(users)
  //   console.log(pacients)
  // },[users,pacients])

  useEffect(() => {
    getUsers('https://reqres.in/api/users?page=1%27');
    getPacients('https://jsonplaceholder.typicode.com/users');
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Header handleClickEventHome={handleClickEventHome} />
        <Routes>
          <Route path='/' element={<Home users={users} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pacientes' element={<Pacientes/>}/>

          {/* 
            <Route path='/turnos' element={}/>
            <Route path='/indice' element={}/>  */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App; 