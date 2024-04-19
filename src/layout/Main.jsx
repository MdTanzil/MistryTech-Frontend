import { Outlet } from "react-router-dom";
import OfficeFurniture from "../componentes/Home/OfficeFurniture/OfficeFurniture";
import TermsConditions from "../componentes/Home/TermsConditions/TermsConditions";
import AuthProvider from "../provider/AuthProvider";
import SearchContextProvider from "../provider/SearchContextProvider";
import Footer from "../shared/Footer/Footer";
import NavBar from "../shared/Navbar/Navbar";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import GarmentsFurniture from "../componentes/Home/GarmentsFurniture/GarmentsFurniture";
import HomeFurniture from "../componentes/Home/HomeFurniture/HomeFurniture";
import SchoolFurniture from "../componentes/Home/SchoolFurniture/SchoolFurniture";
import RestaurantFurniture from "../componentes/Home/RestaurantFurniture/RestaurantFurniture";

const Main = () => {
  return (
    <div>
      <AuthProvider>
        <SearchContextProvider>
          <UpperNavbar></UpperNavbar>
          <NavBar></NavBar>

          <Outlet></Outlet>
          <OfficeFurniture></OfficeFurniture>
          <GarmentsFurniture></GarmentsFurniture>
          <HomeFurniture></HomeFurniture>
          <SchoolFurniture></SchoolFurniture>
          <RestaurantFurniture></RestaurantFurniture>
          <TermsConditions></TermsConditions>
          <Footer></Footer>
        </SearchContextProvider>
      </AuthProvider>
    </div>
  );
};

export default Main;
