import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";
import {I18nextProvider} from 'react-i18next';
import i18n from "./i18n.ts";
import {store} from "./store.ts";
import { Provider } from 'react-redux'

const theme = createTheme({
    direction: 'ltr'
});



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>


                    <Provider store={store}>
                    <App/>
                    </Provider>


        </ThemeProvider>
        </I18nextProvider>
    </React.StrictMode>,
)
