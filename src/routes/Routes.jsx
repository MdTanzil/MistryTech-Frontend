import { createBrowserRouter } from "react-router-dom";
import Login from "../Page/Login";
import Home from "../componentes/Home/Home/Home";
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
]);
export default router;
