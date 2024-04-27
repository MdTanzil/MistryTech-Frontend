import Img from "../../assets/images/meeting.jpg";

const MeetingRequest = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:order-2">
          <img src={Img} alt="" className="w-full h-[400px]" />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            We are waiting for you!
          </h1>
          <p className="text-gray-500">
            We are a leading provider of high-quality office furniture and are
            excited to help you create a professional and comfortable work
            environment for your team. If you would like to schedule a meeting
            to discuss your furniture needs in more detail, please fill out the
            form below. Our team will get back to you as soon as possible to
            schedule a consultation. We look forward to the opportunity to work
            with you and create a space that meets the unique needs of your
            business. Thank you for considering us for your office furniture
            needs.
          </p>
          <button className="uppercase mt-4 px-4 py-2 bg-primary text-white hover:bg-secondary">
            Request A Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRequest;
