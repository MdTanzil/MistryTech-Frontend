import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import AdminHome from "../Page/admin/AdminHome";
import Collections from "../Page/collections/Collections";
import Home from "../componentes/Home/Home/Home";
import Admin from "../layout/Admin";
import Main from "../layout/Main";
import AuthProvider from "../provider/AuthProvider";
<<<<<<< HEAD
import Collections from "../Page/collections/Collections";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
=======
>>>>>>> a5d99eb47cad710d67a7782b903e462db8182358

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collections",
        element: <Collections></Collections>,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
    ],
  },
  {
    path:"/product-details",
    element:<ProductDetails></ProductDetails>
  },
]);
export default router;
