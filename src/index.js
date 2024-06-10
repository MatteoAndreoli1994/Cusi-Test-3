import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { theme } from "./theme";
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./state";
import posthog from 'posthog-js'

posthog.init('phc_sPEILFY6dLVqX8dKF3Eo2XsVwjYXSmGNU3tYEeltvdp',
    {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)

const store = configureStore({
  reducer: { cart: cartReducer},

});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>

    </Provider>

  </React.StrictMode>
);

