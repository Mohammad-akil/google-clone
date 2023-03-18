import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBHsEjPAAIIqGWl-EKr8zAivyzR3sZeXs4",
  cx: "94242df4dda7f43a0",
};



export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
