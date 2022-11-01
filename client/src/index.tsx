import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/_global.scss';
import ReactGA from 'react-ga4';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';
import { client } from './service/api';

const TRACKING_ID = 'G-CSHH5QZZ54';
ReactGA.initialize(TRACKING_ID);

const container = document?.getElementById('root');
let root = null;
if(container) root = createRoot(container);

root?.render(<React.StrictMode>
  <HelmetProvider>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </HelmetProvider>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
