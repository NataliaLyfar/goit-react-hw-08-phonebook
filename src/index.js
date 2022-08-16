import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, Flip } from 'react-toastify';
import { theme } from './styleConfig/theme';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <ToastContainer 
          position="top-center"
          theme="dark"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          transition={Flip}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);