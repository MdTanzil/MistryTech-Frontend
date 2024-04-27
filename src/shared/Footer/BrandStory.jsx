import Img from "../../assets/images/Wood-Cutting-Tools.jpeg";

const BrandStory = () => {
  return (
    <div>
      <img
        src={Img}
        alt="collections-hero"
        className="w-full h-[300px] object-cover"
      />
      <div className="container mx-auto mt-16">
        <h2 className="text-4xl font-bold mb-4">Who We Are!</h2>
        <div className="text-gray-500 text-lg">
          <p className="mb-2">
            MistryTech is a Nationwide E-Commerce Base Furniture Manufacture
            Company & Brand, Established in 2020.
          </p>
          <p className="mb-2">
            MistryTech is a Brand that reflects an intense way of Living!
          </p>
          <p className="mb-2">
            We present new products to our customers by valuing the brand above
            all else.
          </p>
          <p className="mb-2">
            We started operations as home and corporate solutions, specialists
            and have since established ourselves as a trusted brand countrywide.
          </p>
          <p className="mb-2">
            Also, we provide customized products to the corporate sector as per
            their taste and preferences.
          </p>
          <p className="mb-2">
            We are continuously adding new designs and manufacturing on-demand
            to bring a curated selection of beautiful furniture to thousands of
            happy customers across Bangladesh.
          </p>
          <p className="mb-2">
            We carry the highest quality of environmentally friendly furniture
            whether consumers are looking for eco-friendly products. Fitment
            Craft promises to give customers the best quality at affordable
            prices.
          </p>
          <p className="mb-2 font-bold">Trade License: 151015</p>
          <p className="mb-2 font-bold">BIN: 003367085-0202</p>
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
