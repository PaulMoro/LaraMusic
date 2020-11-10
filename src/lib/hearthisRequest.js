import axios from "axios";
export const getSongs = async (songs) => {
  const API_HOST = "https://api-v2.hearthis.at/feed/popular/?page=1&count=";
  return axios.get(`${API_HOST}${songs}`).then((res) => {
    return res;
  });
};
