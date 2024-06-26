import { useState } from "react";
import Img from "../../assets/images/collections-hero.jpg";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Implement logic to add the product to the cart
    console.log("Product added to cart");
  };

  const handleBuyNow = () => {
    // Implement logic to proceed to checkout
    console.log("Proceeding to checkout");
  };

  return (
    <div>
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div>
          <img src={Img} alt="" />
        </div>
        <div className="ml-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Easy Table | TV2-005
          </h1>
          <p className="text-gray-600 mt-4 text-xl">
            Tk 6,990.00{" "}
            <span className="line-through text-slate-400">TK 7,500.00</span>
          </p>
          <p className="text-gray-600 font-semibold mt-6">
            Color Combo:{" "}
            <span className="text-slate-600 font-normal">
              Base-White, Top-Black
            </span>{" "}
          </p>
          <div className="mt-3">
            <button className=" bg-secondary hover:bg-primary py-2 px-2 text-white  ">
              Base-Black, Top- White
            </button>
            <button className="bg-primary hover:bg-secondary py-2 px-2 text-white ml-2">
              Base-Black, Top- White
            </button>
          </div>
          <p className="text-gray-600 font-semibold mt-6">
            Size:{" "}
            <span className="text-slate-600 font-normal">
              47(L)X23(W)X30(H)
            </span>{" "}
          </p>
          <div className=" mt-3">
            <button className="bg-primary hover:bg-secondary py-2 px-2 text-white ">
              Base-Black, Top- White
            </button>
            <button className="bg-secondary hover:bg-primary py-2 px-2 text-white ml-2">
              Base-Black, Top- White
            </button>
          </div>
          <p className="mb-4 mt-4">Payment:</p>
          <a className="mb-5 font-medium" href="">
            Bkash : 01799000000
          </a>
          <p className="mb-4 mt-4 font-medium">
            Buy now, pay later! Flexible Monthly Payments up to 12 Months with
            Credit Card
          </p>
          <div className="flex items-center mt-6">
            <button
              onClick={handleDecreaseQuantity}
              className="border border-gray-300 px-3 py-1 rounded-md"
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="border border-gray-300 px-3 py-1 rounded-md"
            >
              +
            </button>
          </div>
          <div className="gap-4 mt-3">
            <button
              onClick={handleAddToCart}
              className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md shadow-md"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-secondary hover:bg-primary text-white py-2 px-4 rounded-md shadow-md ml-4"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
