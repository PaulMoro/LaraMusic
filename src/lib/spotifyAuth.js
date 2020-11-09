import axios from 'axios';

const API_HOST = 'https://accounts.spotify.com/api/token';
const API_TOKEN =
  'Basic ZjZkNTZjMjE4YTZkNGEzYWJkMjRkNGE0Nzk1NzA1MDI6MDg3ZjA2MzQyMDc4NDBiMjg5MTg5YjBlZDVhNjA2N2E';

export const spotifyAuth = async () => {
  return axios
    .post(API_HOST, 'grant_type=client_credentials', {
      headers: {
        Authorization: API_TOKEN,
      },
    })
    .then((res) => {
      return res.data.access_token;
    });
};
