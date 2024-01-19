import { FC } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

export enum RoutesPaths {
  Home = '/',
  LoginPage = '/LoginPage',
}


const App: FC = () => {

  return (
     <Routes>
      <Route path={RoutesPaths.Home} element={<HomePage />} />
      <Route path={RoutesPaths.LoginPage} element={<LoginPage />} />
    </Routes>
  )
}

export default App;





    // <Routes>
    //   <Route path={RoutesPaths.Home} element={<HomePage />} />
    //   <Route path={RoutesPaths.LoginPage} element={<LoginPage />} />
    // </Routes>
