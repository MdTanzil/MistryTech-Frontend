import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Img01 from "../../../assets/images/carouse01.jpg";
import Img02 from "../../../assets/images/carouse02.jpg";
import Img03 from "../../../assets/images/carouse03.jpg";

export default function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-60 w-full md:h-[470px] lg:h-[740px] relative overflow-hidden "
      >
        <SwiperSlide>
          <img src={Img01} alt="" />
          <div className="absolute h-full w-full bg-[#0000005c] mix-blend-darken"></div>
          <div className="absolute h-full flex w-full  justify-center items-center">
            <div className="w-fit h-fit  text-white">
              <h2 className="font-semibold lg:text-7xl  text-xl flex justify-center items-center">
                Complements Your lifestyle
                <div className="bg-primary pl-5 ml-4  h-1 w-20"></div>
              </h2>

              <h4 className="font-thin mt-6 text-lg flex justify-center items-center ">
                <div className="bg-primary pl-5 mr-4  h-1 w-20"></div>
                The expression of rest
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img02} alt="" className="" />
          <div className="absolute h-full w-full bg-[#0000005c] mix-blend-darken"></div>
          <div className="absolute h-full flex w-full  justify-center items-center">
            <div className="w-fit h-fit  text-white">
              <h2 className="font-semibold lg:text-7xl text-xl flex justify-center items-center">
                Sets you as a trend
                <div className="bg-primary pl-5 ml-4  h-1 w-20"></div>
              </h2>

              <h4 className="font-thin mt-6 text-lg flex justify-center items-center ">
                <div className="bg-primary pl-5 mr-4  h-1 w-20"></div>
                Aesthetically stylish setter
              </h4>
            </div>
          </div>
          <div className="autoplay-progress hidden" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img03} alt="" className="" />
          <div className="absolute h-full w-full bg-[#0000005c] mix-blend-darken"></div>
          <div className="absolute h-full flex w-full  justify-center items-center">
            <div className="w-fit h-fit  text-white">
              <h2 className="font-semibold lg:text-7xl text-xl flex justify-center items-center">
                Made for creating tasty memories
                <div className="bg-primary pl-5 ml-4  h-1 w-20"></div>
              </h2>

              <h4 className="font-thin mt-6 text-lg flex justify-center items-center ">
                <div className="bg-primary pl-5 mr-4  h-1 w-20"></div>
                Bundle of satisfaction
              </h4>
            </div>
          </div>
          <div className="autoplay-progress hidden" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
