import './App.css'
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { FC } from 'react';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} end></Route>
      <Route path='/LoginPage' element={<LoginPage />}></Route>
    </Routes>
  )
}

export default App
