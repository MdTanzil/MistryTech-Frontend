import { Outlet } from "react-router-dom";
import AuthProvider from "../provider/AuthProvider";
import SearchContextProvider from "../provider/SearchContextProvider";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar/Navbar";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
const Main = () => {
  return (
    <div>
      <AuthProvider>
        <SearchContextProvider>
          <UpperNavbar></UpperNavbar>
          <NavBar></NavBar>

          <Outlet></Outlet>
          <Footer></Footer>
        </SearchContextProvider>
      </AuthProvider>
    </div>
  );
};

export default Main;
