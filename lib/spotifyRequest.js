import axios from 'axios';
import { spotifyAuth } from './spotifyAuth';

export const getPlaylist = async (playListId) => {
  const API_HOST = 'https://api.spotify.com/v1/playlists/';
  const token = await spotifyAuth();
  return axios
    .get(`${API_HOST}${playListId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};
export const getSong = async (songId) => {
  const API_HOST = 'https://api.spotify.com/v1/tracks/';
  const token = await spotifyAuth();
  return axios
    .get(`${API_HOST}${songId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    });
};

// export const getPlaylist = async (endpoint, jwt) => {
// 	const headers = jwt
// 		? {
// 				headers: { Authorization: `Bearer ${jwt}` },
// 		  }
// 		: null;
// 	return axios.get(getUrl(endpoint), headers);
// };
