import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { useRef } from "react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carusel() {
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="h-60 w-full md:h-[470px] lg:h-[640px] relative overflow-hidden "
      >
        <SwiperSlide>
          <img
            src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2024-03/tdh-341-ivnterior-4-seater.jpg"
            alt=""
          />
          <div className="absolute h-full w-full bg-[#0000005c] mix-blend-darken"></div>
          <div className="absolute h-full flex w-full  justify-center items-center">
            <div className="w-fit h-fit  text-white">
              <h2 className="font-semibold text-7xl flex justify-center items-center">
                Complements Your lifestyle
                <div className="bg-primary pl-5 ml-4  h-1 w-20"></div>
              </h2>

              <h4 className="font-thin mt-6 text-lg flex justify-center items-center ">
                <div className="bg-primary pl-5 mr-4  h-1 w-20"></div>
                Lorem, ipsum dolor.lorem2 Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-12/rch-206.jpg"
            alt=""
            className=""
          />
          <div className="absolute h-full w-full bg-[#0000005c] mix-blend-darken"></div>
          <div className="absolute h-full flex w-full  justify-center items-center">
            <div className="w-fit h-fit  text-white">
              <h2 className="font-semibold text-7xl flex justify-center items-center">
                Complements Your lifestyle
                <div className="bg-primary pl-5 ml-4  h-1 w-20"></div>
              </h2>

              <h4 className="font-thin mt-6 text-lg flex justify-center items-center ">
                <div className="bg-primary pl-5 mr-4  h-1 w-20"></div>
                Lorem, ipsum dolor.lorem2 Lorem ipsum dolor sit amet.
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
