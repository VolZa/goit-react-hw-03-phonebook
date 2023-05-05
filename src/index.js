import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/app/App';
// import './index.css';rt
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#232323',
    accent: '#6085d3',
    white: '#fdfdfd',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-03-phonebook">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
//Перепушую на гітхаб, і ще раз
