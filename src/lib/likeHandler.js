import axios from 'axios';

export const likeHandler = async (song, user) => {
  const songId = await createSong(song);
  const userFavouriteListId = getFavouriteList(user);
  console.log('Datos para crear objeto', userFavouriteListId, songId);
  const favoriteSong = {
    musiclist: userFavouriteListId[0],
    musictrack: songId,
  };
  console.log('objeto creado', favoriteSong);
  setLikedSong(favoriteSong);
};

export const createSong = async (song) => {
  console.log(song);
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/musictracks/';
  return axios.post(API_HOST, song).then((res) => {
    return res.data.id;
  });
};
export const setLikedSong = async (liked) => {
  const API_HOST = 'https://laramusicapi.herokuapp.com/api/v1/trackinlists/';
  return axios.post(API_HOST, liked).then((res) => {
    return res.data;
  });
};

function getFavouriteList(user) {
  return user.profile.musiclists.map((list) => {
    if ((list.type_list = 'favourites')) {
      console.log(list.id);
      return list.id;
    }
  });
}
