import Service from "../Service/Service";
import Slider from "../Slider/Slider";
import OfficeFurniture from './../OfficeFurniture/OfficeFurniture';
import GarmentsFurniture from './../GarmentsFurniture/GarmentsFurniture';
import HomeFurniture from './../HomeFurniture/HomeFurniture';
import SchoolFurniture from './../SchoolFurniture/SchoolFurniture';
import RestaurantFurniture from './../RestaurantFurniture/RestaurantFurniture';
import TermsConditions from './../TermsConditions/TermsConditions';


const Home = () => {
    return (
      <>
        <Slider></Slider>
        <Service></Service>
        <OfficeFurniture></OfficeFurniture>
        <GarmentsFurniture></GarmentsFurniture>
        <HomeFurniture></HomeFurniture>
        <SchoolFurniture></SchoolFurniture>
        <RestaurantFurniture></RestaurantFurniture>
        <TermsConditions></TermsConditions>
       
      </>
    );
};

export default Home;