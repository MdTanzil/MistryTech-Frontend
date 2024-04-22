import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error";
import Login from "../Page/Login";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import AdminHome from "../Page/admin/AdminHome";
import Collections from "../Page/collections/Collections";
import Home from "../componentes/Home/Home/Home";
import Admin from "../layout/Admin";
import Main from "../layout/Main";
import AuthProvider from "../provider/AuthProvider";

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
      {
        path: "/product-details",
        element: <ProductDetails></ProductDetails>,
      },
    ],
    errorElement: <Error />,
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
]);
export default router;
