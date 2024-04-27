import { Link } from "react-router-dom";
import Img from "../../assets/images/Returns & Warranty. svg-01.svg";
import Img2 from "../../assets/images/shipping_9ab096f8-4eb0-4104-a6a7-7b6c334ee41a.avif";
import Img3 from "../../assets/images/Customer Support.2-01.svg";
import Img4 from "../../assets/images/location.avif";

const HelpCenter = () => {
  return (
    <div>
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-14">
        <div className="text-center items-center justify-center">
          <img src={Img} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Warranty & Returns
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center mt-10">
          <img src={Img2} alt="" className="w-24 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Shipping & Delivery
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center">
          <img src={Img3} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Customer Service
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center mt-10">
          <img src={Img4} alt="" className="w-20 mx-auto mb-6" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Where to Buy
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center">
          <img src={Img} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Warranty & Returns
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center">
          <img src={Img} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Warranty & Returns
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center">
          <img src={Img} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Warranty & Returns
            </p>
          </Link>
        </div>
        <div className="text-center items-center justify-center">
          <img src={Img} alt="" className="w-36 mx-auto" />
          <Link>
            <p className="uppercase  px-4 py-2 hover:bg-black hover:text-white">
              Warranty & Returns
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
