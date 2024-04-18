import { Outlet } from "react-router-dom";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import TermsConditions from "../componentes/Home/TermsConditions/TermsConditions";
import OfficeFurniture from "../componentes/Home/OfficeFurniture/OfficeFurniture";
import SearchContextProvider from "../provider/SearchContextProvider";
import GarmentsFurniture from "../componentes/Home/GarmentsFurniture/GarmentsFurniture";
import HomeFurniture from "../componentes/Home/HomeFurniture/HomeFurniture";
import SchoolFurniture from "../componentes/Home/SchoolFurniture/SchoolFurniture";
import RestaurantFurniture from "../componentes/Home/RestaurantFurniture/RestaurantFurniture";


const Main = () => {
    return (
        <div>
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
        </div>
    );
};

export default Main;