import Returns from "../../../assets/images/Returns & Warranty. svg-01.svg";
import EMI from "../../../assets/images/EMI Available. svg.svg";
import Customer from "../../../assets/images/Customer Support.2-01.svg";

const Service = () => {
  return (
    <div className="container mx-auto mt-16 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center text-center">
          <img src={Returns} alt="" className="w-36 mx-auto" />
          <h4 className="text-3xl font-medium">Service Warranty</h4>
          <p className="text-lg">
            Buy with confidence! Our products come with a warranty and easy
            return policy.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-8">
          <img src={EMI} alt="" className="w-20 mx-auto mb-10" />
          <h4 className="text-3xl font-medium">EMI Available</h4>
          <p className="text-lg">
            Buy now, pay later! Easy monthly installments for up to 12 months on
            your credit card.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={Customer}
            alt=""
            className="w-52 mt-[-30px] mb-[-90px] mx-auto"
          />
          <div className="mt-[53px]">
            <h4 className="text-3xl font-medium">Customize Furniture</h4>
            <p className="text-lg">
              We make furniture according to customer&apos;s own design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
