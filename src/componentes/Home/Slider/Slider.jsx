const Slider = () => {
  // TODO: Fix The Sidebar

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-outline btn-circle text-2xl">
              🡠
            </a>
            <a href="#slide2" className="btn btn-outline btn-circle text-2xl">
              🡢
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h3 className="text-4xl font-bold mb-3">This is Slide 1</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a?
            </p>
            <button className="uppercase btn btn-warning hover:bg-black hover:text-white">
              Shop now
            </button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-outline btn-circle text-2xl">
              🡠
            </a>
            <a href="#slide3" className="btn btn-outline btn-circle text-2xl">
              🡢
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h3 className="text-4xl font-bold mb-3">This is Slide 2</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a?
            </p>
            <button className="uppercase btn btn-warning hover:bg-black hover:text-white">
              Shop now
            </button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-outline btn-circle text-2xl">
              🡠
            </a>
            <a href="#slide4" className="btn btn-outline btn-circle text-2xl">
              🡢
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h3 className="text-4xl font-bold mb-3">This is Slide 3</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a?
            </p>
            <button className="uppercase btn btn-warning hover:bg-black hover:text-white">
              Shop now
            </button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-outline btn-circle text-2xl">
              🡠
            </a>
            <a href="#slide1" className="btn btn-outline btn-circle text-2xl">
              🡢
            </a>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h3 className="text-4xl font-bold mb-3">This is Slide 4</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, a?
            </p>
            <button className="uppercase btn btn-warning hover:bg-black hover:text-white">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
