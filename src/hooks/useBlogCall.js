import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  // getProCatBrandSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/Toastify";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { instance } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await instance.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Getting data failed");
      console.log(error);
    }
  };

  const getCommentData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await instance.get(`api/${url}/${id}/`);
      dispatch(getSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Updating data failed");
      console.log(error);
    }
  };

  const postComment = async (url, info) => {
    dispatch(fetchStart());
    try {
      await instance.post(`api/${url}/`, info);
      toastSuccessNotify(`${url.slice(0, url.length - 1)} posted successfully`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Posting data failed");
      console.log(error);
    }
  };

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await instance.get(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Updating data failed");
      console.log(error);
    }
  };

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await instance.post(`api/${url}/`, info);
      toastSuccessNotify(`${url.slice(0, url.length - 1)} posted successfully`);
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Posting data failed");
      console.log(error);
    }
  };
  const putBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await instance.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(
        `${url.slice(0, url.length - 1)} updated successfully`
      );
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Updating data failed");
      console.log(error);
    }
  };

  // const getProCatBrand = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const [products, categories, brands] = await Promise.all([
  //       instance.get("stock/products/"),
  //       instance.get("stock/categories/"),
  //       instance.get("stock/brands/"),
  //     ]);
  //     dispatch(
  //       getProCatBrandSuccess([products?.data, categories?.data, brands?.data])
  //     );
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify("Getting data failed");
  //     console.log(error);
  //   }
  // };

  const deleteBlogData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await instance.delete(`stock/${url}/${id}`);
      toastSuccessNotify(
        `${url.slice(0, url.length - 1)} deleted successfully`
      );
      getBlogData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Deleting data failed");
      console.log(error);
    }
  };

  return {
    getBlogData,
    postBlogData,
    deleteBlogData,
    putBlogData,
    getCommentData,
    postComment,
    getCategories,
  };
};

export default useBlogCall;
