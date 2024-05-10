import Button from "@mui/material/Button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Img from "../../../assets/images/ceo-desk.jpeg";
import { useAxiosPublic } from "../../../hooks";

const OfficeFurniture = () => {
  const axios = useAxiosPublic();
  const getSubCategories = async () => {
    let data = await axios.get("/category/slug/office-furniture");
    // console.log("data", data.data);
    return data.data[0].subcategories;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["category/office-furniture"],
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
      <h3 className="text-3xl font-bold text-center mt-6 mb-20">
        Office Furniture Collections
      </h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="relative">
          {/* Image */}
          <img
            src={data[0]?.images[0]?.image || Img}
            alt=""
            className="w-full h-full  "
          />

          {/* Button */}
          <p className="absolute bottom-12 left-64  text-white px-4 py-2 ">
            <Button variant="contained">{data[0]?.name}</Button>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {data.slice(1, 5).map((cat) => (
            <div className=" relative " key={cat.url}>
              <img
                src={cat?.images[0]?.image || Img}
                alt=""
                className="w-full h-auto"
              />

              <button className="absolute bottom-8 left-28 text-white px-4 py-2">
                <Link to={`/collections/${cat?.slug}`}>
                  <Button variant="contained">{cat?.name}</Button>
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeFurniture;
