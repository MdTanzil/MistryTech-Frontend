import { useAxiosPublic } from "../hooks";

const getSubCategory = async (slug) => {
  const axios = useAxiosPublic();
  let data = await axios.get(`/category/slug/${slug}`);
  return data.data;
};

export { getSubCategory };
