import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';
import './firebaseConfig.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </MantineProvider>

)
