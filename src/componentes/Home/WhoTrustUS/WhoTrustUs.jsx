import Marquee from "react-fast-marquee";
import AbulKhayer from "../../../assets/logoImg/abul-khair-tobacco-co-ltd-logo.png";
import Akij from "../../../assets/logoImg/Akij-logo.png";
import Img from "../../../assets/logoImg/633.avif";
import Img2 from "../../../assets/logoImg/adfinix-122.avif";
import Img3 from "../../../assets/logoImg/bazar.avif";
import Img4 from "../../../assets/logoImg/Bdren.avif";
import Img5 from "../../../assets/logoImg/Dakber.avif";
import Img6 from "../../../assets/logoImg/Germania.avif";
import Img7 from "../../../assets/logoImg/Primatex.avif";
import Img8 from "../../../assets/logoImg/sisimpur-31.avif";
import Img9 from "../../../assets/logoImg/UniversalMedical.avif";
import Img10 from "../../../assets/logoImg/UntitleBBBBd-1.avif";
import Img11 from "../../../assets/logoImg/Untitled-2.avif";
import Img12 from "../../../assets/logoImg/UntitleLLLLLLLLLLLLLLLLLLLd.avif";
import Img13 from "../../../assets/logoImg/YRC.avif";

const WhoTrustUs = () => {
  const gradientStyle = {
    background:
      "linear-gradient(to right, #30CEC9 10%, transparent 60%), linear-gradient(to left, #FBF7D9 10%, transparent 60%)",
    padding: "5px", // Adjust padding as needed
    borderRadius: "5px", // Optional: Add border radius for rounded corners
  };
  return (
    <div className="mt-14 mb-16">
      <h3 className="text-3xl font-bold mt-14 text-center mb-12">
        Who Trust Us
      </h3>
      <Marquee className="" style={gradientStyle}>
        <img src={AbulKhayer} alt="" className="h-16 mr-10" />
        <img src={Akij} alt="" className="h-16 mr-10" />
        <img src={Img} alt="" className="" />
        <img src={Img2} alt="" className="" />
        <img src={Img3} alt="" className="" />
        <img src={Img4} alt="" className="" />
        <img src={Img5} alt="" className="" />
        <img src={Img6} alt="" className="" />
        <img src={Img7} alt="" className="" />
        <img src={Img8} alt="" className="" />
        <img src={Img9} alt="" className="" />
        <img src={Img10} alt="" className="" />
        <img src={Img11} alt="" className="" />
        <img src={Img12} alt="" className="" />
        <img src={Img13} alt="" className="" />
      </Marquee>
    </div>
  );
};

export default WhoTrustUs;
