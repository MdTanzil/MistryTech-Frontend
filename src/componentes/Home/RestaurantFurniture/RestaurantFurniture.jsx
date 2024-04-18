
import Img from "../../../assets/images/Restaurant-Furniture.jpg";
const RestaurantFurniture = () => {
    return (
      <div>
        <h3 className="text-3xl font-bold text-center mt-16 mb-20">
          Restaurant Furniture
        </h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="relative">
            {/* Image */}
            <img src={Img} alt="" className="w-full h-[450px]  " />

            {/* Button */}
            <p className="uppercase absolute bottom-8 left-36 bg-yellow-500 text-white px-4 py-2 ">
              Sofa
            </p>
          </div>
          <div className="relative">
            {/* Image */}
            <img src={Img} alt="" className="w-full h-[450px]  " />

            {/* Button */}
            <p className="uppercase absolute bottom-8 left-36 bg-yellow-500 text-white px-4 py-2 ">
              Storage Rack
            </p>
          </div>
          <div className="relative">
            {/* Image */}
            <img src={Img} alt="" className="w-full h-[450px]  " />

            {/* Button */}
            <p className="uppercase absolute bottom-8 left-40 bg-yellow-500 text-white px-4 py-2 ">
              Trolley
            </p>
          </div>
        </div>
      </div>
    );
};

export default RestaurantFurniture;