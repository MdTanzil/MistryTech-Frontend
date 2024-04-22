import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carusel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
