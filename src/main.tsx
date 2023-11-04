
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
