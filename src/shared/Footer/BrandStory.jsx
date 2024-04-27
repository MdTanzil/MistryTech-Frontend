import Img from "../../assets/images/Wood-Cutting-Tools.jpeg";

const BrandStory = () => {
  return (
    <div>
      <img
        src={Img}
        alt="collections-hero"
        className="w-full h-[300px] object-cover"
      />
      <div className="container mx-auto mt-14">
        <h2 className="text-4xl font-bold">Who We Are!</h2>
        <p>
          FITMENT CRAFT is a Nationwide E-Commerce Base Furniture Manufacture
          Company & Brand, Established in 2020.
        </p>
        <p>Fitment Craft is a Brand that reflects an intense way of Living!</p>
        <p>
          We present new products to our customers by valuing the brand above
          all else.
        </p>
      </div>
    </div>
  );
};

export default BrandStory;
