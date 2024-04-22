import { Outlet } from "react-router-dom";
import AuthProvider from "../provider/AuthProvider";
import SearchContextProvider from "../provider/SearchContextProvider";
import Footer from "../shared/Footer/Footer";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import NavBar from "./../shared/Navbar/Navbar";
const Main = () => {
  return (
    <div className="">
      <AuthProvider>
        <SearchContextProvider>
          <div className="sticky top-0 z-20 ">
            <UpperNavbar></UpperNavbar>
            <NavBar></NavBar>
          </div>

          <Outlet></Outlet>
          <Footer></Footer>
        </SearchContextProvider>
      </AuthProvider>
    </div>
  );
};

export default Main;
