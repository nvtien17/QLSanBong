
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
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ThankYouPage from "./Component/ThankyouPage/ThankYouPage";
import About from "./pages/about/about";

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
          path: "/about",
          element: <About />
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
        },

        {
          path: '/thank-you',
          element: <ThankYouPage />
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
