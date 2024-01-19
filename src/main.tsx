import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import './firebaseConfig.ts'
import '@mantine/core/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        <App />
      </Provider>
    </BrowserRouter>
  </MantineProvider>

)
