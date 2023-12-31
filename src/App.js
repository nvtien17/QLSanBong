
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './Grid.css'
import './App.css';
import Container from './Component/Container';
import Layout from "./pages/layout/Layout";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Container />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    }
  ]
  )
  return (


    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
