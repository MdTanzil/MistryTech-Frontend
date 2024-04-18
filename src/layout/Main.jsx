import { Outlet } from "react-router-dom";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import NavBar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import TermsConditions from "../componentes/Home/TermsConditions/TermsConditions";
import OfficeFurniture from "../componentes/Home/OfficeFurniture/OfficeFurniture";
import SearchContextProvider from "../provider/SearchContextProvider";


const Main = () => {
    return (
        <div>
            <SearchContextProvider>
                <UpperNavbar></UpperNavbar>
            <NavBar></NavBar>

            
            <Outlet></Outlet>
            <OfficeFurniture></OfficeFurniture>
            <TermsConditions></TermsConditions>
            <Footer></Footer>
            </SearchContextProvider>
        </div>
    );
};

export default Main;