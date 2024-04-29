import Img from "../../assets/images/social-media-post.png";

const SocialMediaPost = () => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl text-center font-bold mt-12 mb-14">
        Social Media Posts
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div>
          <img src={Img} alt="" className="w-full h-[450px]  " />
        </div>
        <div>
          <img src={Img} alt="" className="w-full h-[450px]  " />
        </div>
        <div>
          <img src={Img} alt="" className="w-full h-[450px]  " />
        </div>
        <div>
          <img src={Img} alt="" className="w-full h-[450px]  " />
        </div>
        <div>
          <img src={Img} alt="" className="w-full h-[450px]  " />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPost;
