import { HiOutlineMail } from "react-icons/hi";
const TermsConditions = () => {
  return (
    <div className="text-center ">
      <div className=" md:ml-36 md:mr-36 md:mt-24 md:mb-24 lg:ml-60 lg:mr-60 lg:mt-32 lg:mb-32 m-16">
        <p className="w-16 text-5xl font-extrabold mx-auto mb-4">
          <HiOutlineMail />
        </p>
        <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold">
          Stay up to date with all lates furniture and exclusive offers
        </h3>
        <div className="join mt-10">
          <input
            className="input input-bordered join-item border-yellow-600"
            placeholder="Email"
          />
          <button className="btn btn-outline btn-warning join-item ">
            Subscribe
          </button>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-center">
            <input type="checkbox" className="checkbox checkbox-info" />
            <p className="label-text ml-3">
              I agree with the Terms & conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
