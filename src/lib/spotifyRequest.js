import axios from 'axios';
import { spotifyAuth } from './spotifyAuth';
import { getOnlySongsWithPreview } from './spotifyUtils';
import { time_convert } from './playerInterface';

//This function recives a playlistId and the index of songs that will be displayed
export const getPlaylistCleaned = async (playlistId, limit) => {
  let attempt = 0;
  let length = 0;
  let playlist;
  while (length !== limit) {
    let listOfSongs = await getPlaylistWithLimit(playlistId, attempt + limit);
    playlist = getOnlySongsWithPreview(listOfSongs, limit);
    attempt++;
    if (attempt === 20) {
      // This line prevents an infinite loop if there is too many songs with preview url
      break;
    }
    length = playlist.length;
    //console.log('>>> attempt:', attempt);
    //console.log('>>> playlist:', playlist);
  }
  let songsArray = [];
  playlist.map((item) => {
    const song = {
      title: item.track.name,
      artist: item.track.artists[0].name,
      track_uri: item.track.preview_url,
      image_uri: item.track.album.images[0].url,
      id: item.track.id,
      length: time_convert(item.track.duration_ms),
      views: item.track.popularity,
      fuente: 'spotify',
    };
    songsArray.push(song);
  });
  return songsArray;
};

export const getPlaylistWithLimit = async (playListId, limit) => {
  //This function fetch a playlist from spotify and return n = limit number of songs only
  //  with preview content.
  let attempt = 1;
  const limitTemplate = '/tracks?offset=0&limit=';
  const API_HOST = 'https://api.spotify.com/v1/playlists/';
  let fetchUrl;
  if (limit > 0) {
    fetchUrl = `${API_HOST}${playListId}${limitTemplate}${limit}`;
  } else {
    console.error('You must set a limit or use getPlaylist');
    try {
      return getPlaylist(playListId);
    } catch (e) {
      console.error(e);
    }
  }
  //console.log(">>>", fetchUrl);
  const token = await spotifyAuth();
  return axios
    .get(`${fetchUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      //console.log(res.data);
      return res.data.items;
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

export const getPlaylist = async (playlistId) => {
  const token = await spotifyAuth();
  const API_HOST = 'https://api.spotify.com/v1/playlists/';
  const fetchUrl = `${API_HOST}${playlistId}`;

  return axios
    .get(`${fetchUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      //console.log(res.data);
      return res.data.tracks;
    });
};
