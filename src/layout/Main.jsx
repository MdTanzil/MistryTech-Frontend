import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Outlet } from "react-router-dom";
import Avatar from "../assets/images/Mistrytech furniture logo png-01.png";
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
          <FloatingWhatsApp
            accountName="Mistry Tech"
            phoneNumber="+8801999099000"
            avatar={Avatar}
            allowEsc={true}
            allowClickAway={true}
            notificationDelay={5}
            statusMessage="Typically replies within 1 hour"
          />

          <Footer></Footer>
        </SearchContextProvider>
      </AuthProvider>
    </div>
  );
};

export default Main;
