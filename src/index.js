import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/favorite",
    element: <Favorite />,
    errorElement: <NotFound />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFound />
  },
])
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>,
  document.querySelector('#root')
);