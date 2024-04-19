import Img from "../../../assets/images/ceo-desk.jpeg";

const OfficeFurniture = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-6 mb-20">
        Office Furniture Collections
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="relative">
          {/* Image */}
          <img src={Img} alt="" className="w-full h-auto  " />

          {/* Button */}
          <p className="absolute bottom-12 left-64 bg-yellow-500 text-white px-4 py-2 ">
            CEO DESK
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className=" relative ">
            <img src={Img} alt="" className="w-full h-auto" />

            <button className="absolute bottom-8 left-28 bg-yellow-500 text-white px-4 py-2">
              Button
            </button>
          </div>
          <div className=" relative ">
            <img src={Img} alt="" className="w-full h-auto" />

            <button className="absolute bottom-8 left-28 bg-yellow-500 text-white px-4 py-2">
              Button
            </button>
          </div>
          <div className=" relative ">
            <img src={Img} alt="" className="w-full h-auto" />

            <button className="absolute bottom-8 left-28 bg-yellow-500 text-white px-4 py-2">
              Button
            </button>
          </div>
          <div className=" relative ">
            <img src={Img} alt="" className="w-full h-auto" />

            <button className="absolute bottom-8 left-28 bg-yellow-500 text-white px-4 py-2">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeFurniture;