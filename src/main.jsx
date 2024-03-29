import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Practice from './components/Practice/Practice.jsx'
import Resource from './components/Resources.jsx'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'
import Main from './components/Main.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/practice",
    element: <Practice />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/resources",
    element: <Resource />,
    errorElement: <div>404 Not Found</div>
  },
  {
    path: "/main",
    element: <Main/>,
    errorElement: <div>404 Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
