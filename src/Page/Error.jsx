import Lottie from "lottie-react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Data from "../assets/lottieJson/under-contraction.json";
export default function Error() {
  return (
    <div className="max-h-screen flex mx-auto justify-center items-center">
      <div>
        <div>
          <Lottie
            animationData={Data}
            loop={true}
            className="h-4/6"
            setSpeed={0.7}
          />
        </div>
        <Link to="/">
          <button className="py-2 text-center rounded-lg mx-auto h-16 px-6 mb-4 mt-6 bg-primary text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
            <MdArrowBack />
            <span className="ml-2">Return Home Page</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
