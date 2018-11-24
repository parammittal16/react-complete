import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});


it("renders without crashing", () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>,
div
  );
  ReactDOM.unmountComponentAtNode(div);
})