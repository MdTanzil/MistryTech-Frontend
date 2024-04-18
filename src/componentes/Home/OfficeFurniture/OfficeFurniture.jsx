import Img from "../../../assets/images/ceo-desk.jpeg";

const OfficeFurniture = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mt-6 mb-10">
        Office Furniture Collections
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="">
          <img
            src={Img}
            alt=""
            className="w-full h-auto scale-100 transition-transform duration-300 relative transform hover:slide-fwd-center"
          />

          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            CEO DESK
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="scale-100 transition-transform duration-300 relative transform hover:scale-110">
            <img src={Img} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Button
              </button>
            </div>
          </div>
          <div className="scale-100 transition-transform duration-300 relative transform hover:scale-110">
            <img src={Img} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Button
              </button>
            </div>
          </div>
          <div className="scale-100 transition-transform duration-300 relative transform hover:scale-110">
            <img src={Img} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Button
              </button>
            </div>
          </div>
          <div className="scale-100 transition-transform duration-300 relative transform hover:scale-110">
            <img src={Img} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeFurniture;
