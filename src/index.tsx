import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import '../node_modules/todomvc-app-css/index.css';
import reportWebVitals from './reportWebVitals';
import routers from './routers/routers';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={routers} />
    </PersistGate>
  </Provider>
);

reportWebVitals();
