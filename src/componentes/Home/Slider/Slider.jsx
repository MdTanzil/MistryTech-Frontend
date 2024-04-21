import { useCallback, useEffect, useState } from "react";
const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    "https://source.unsplash.com/1200x540/?nature",
    "https://source.unsplash.com/1200x540/?hill",
    "https://source.unsplash.com/1200x540/?mountain",
    "https://source.unsplash.com/1200x540/?river",
    "https://source.unsplash.com/1200x540/?sea",
  ];
  
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
      
    
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((_, inx) => (
          <button
            key={_}
            onClick={() => setCurrentSlider(inx)}
            className={`rounded-full duration-500 bg-white ${
              currentSlider === inx ? "w-8" : "wz-2"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel container */}
      <div
        className="ease-linear duration-500 flex transform-gpu"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {carouselImages.map((slide, inx) => (
          <img
            key={slide}
            src={slide}
            className="min-w-full h-60 bg-black/20 sm:h-96 md:h-[540px] object-cover"
            alt={`Slider - ${inx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
