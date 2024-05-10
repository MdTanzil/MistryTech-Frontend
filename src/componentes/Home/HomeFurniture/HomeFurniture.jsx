import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import Img from "../../../assets/images/Bed-Design.jpg";
import { useAxiosPublic } from "../../../hooks";
const HomeFurniture = () => {
  const axios = useAxiosPublic();
  const getSubCategories = async () => {
    let data = await axios.get("/category/slug/home-furniture");
    // console.log("data", data.data);
    return data.data[0].subcategories;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["category/home-furniture"],
    queryFn: getSubCategories,
  });
  // console.log("data", data);
  if (isLoading) {
    return (
      <div>
        <div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]">
          <div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Something Wrong</p>
      </div>
    );
  }
  return (
    <div>
      <h3 className="text-3xl font-bold text-center mt-16 mb-20">
        Home Furniture
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.slice(1).map((cat) => (
            <>
              <div className=" relative " key={cat.url}>
                <div
                  key={cat.url}
                  className="absolute h-full w-full bg-[#3f3c3c5c] mix-blend-darken rounded-xl"
                ></div>
                <img
                  src={cat?.images[0]?.image || Img}
                  alt=""
                  className="w-full h-auto"
                />

                <button className="absolute bottom-8 left-28 text-white px-4 py-2">
                  <Button
                    size="large"
                    className="h-full w-full"
                    color="secondary"
                    variant="contained"
                  >
                    {cat?.name}
                  </Button>
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="relative">
          {/* Image */}
          <img src={Img} alt="" className="w-full h-auto  " />

          {/* Button */}
          <p className="absolute bottom-12 left-64  text-white px-4 py-2 ">
            <button className="absolute bottom-8 left-28 text-white px-4 py-2">
              <Button size="large" color="secondary" variant="contained">
                {data[0]?.name}
              </Button>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFurniture;
