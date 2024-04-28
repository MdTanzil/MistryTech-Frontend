import Img from "../../assets/images/meeting.jpg";

const MistrytechHappyPhoto = () => {
  return (
    <div className="mb-14">
      <h2 className="text-4xl text-center font-bold mt-12 mb-14">
        #MistryTechHappyPhoto
      </h2>
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            <div className=" relative ">
              {/* <img src={Img} alt="" className="w-full h-auto" /> */}
              <h3 className="text-6xl font-bold ">Shared by Happy Customer</h3>
              <p className="text-lg mb-10 text-gray-500">
                We are absolutely thrilled to share the photos that customers
                recently shared with us!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div>
              <img src={Img} alt="" className="w-full h-auto" />
            </div>
            <div className=" relative ">
              <img src={Img} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
            <div><img src={Img} alt="" className="w-full h-auto" /></div>
            <div><img src={Img} alt="" className="w-full h-auto" /></div>
            <div><img src={Img} alt="" className="w-full h-auto" /></div>
            <div><img src={Img} alt="" className="w-full h-auto" /></div>
        </div>
      </div>
    </div>
  );
};

export default MistrytechHappyPhoto;
