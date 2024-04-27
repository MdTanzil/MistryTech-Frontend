
import Img from "../../assets/images/meeting.jpg";
const Career = () => {
    return (
      <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <img src={Img} alt="" className="w-full h-[400px]" />
          </div>
          <div className="text-center md:text-left items-center justify-center mt-20">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              We are waiting for you
            </h1>
            <p className="text-gray-500">
              Use this text to share information about your brand with your
              customers. Describe a product, share announcements, or welcome
              customers to your store.
            </p>
            <button className="uppercase mt-4 px-4 py-2 bg-primary text-white hover:bg-secondary">
              Join Oru Team
            </button>
          </div>
        </div>
      </div>
    );
};

export default Career;