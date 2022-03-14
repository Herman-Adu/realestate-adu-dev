import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "c27d0d502bmshc05d1ecd1c8859dp1458dfjsnea2eb0f2f773",
    },
  });

  return data;
};
