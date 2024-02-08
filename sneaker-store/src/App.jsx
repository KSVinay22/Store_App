import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import './App.scss';
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import Register from './pages/Register/Register';
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Success from "./pages/Success/Success";
import Cancel from "./pages/Cancel/Cancel";


const Layout = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path:'/products',
        element: <Products/>
      },
      {
        path: '/products/:category',
        element: <Products/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/success',
        element: <Success/>
      },
      {
        path: '/fail',
        element: <Cancel/>
      }
    ]
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
