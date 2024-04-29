import Img from "../../assets/images/Wood-Cutting-Tools.jpeg";
const ServicingRequest = () => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl text-center font-bold mt-12 mb-14">
        Servicing Request
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div>
          <img src={Img} className="h-[450px]" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <h3 className="uppercase font-bold text-4xl text-center">
            WE&apos;D LOVE TO HEAR FROM YOU
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicingRequest;
