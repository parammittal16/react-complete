import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const app = (
    <Provider store={store}>
    <BrowserRouter basename="/react-complete">
    <App />
    </BrowserRouter>
    </ Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
