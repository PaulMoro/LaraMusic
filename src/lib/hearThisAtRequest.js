export const getPlaylist = async (endpoint, limit) => {
  const limitTemplate = '/?page=1&count=';
  const API_HOST = 'https://api-v2.hearthis.at';
  let playlist;
  const datos = await fetch(`${API_HOST}${endpoint}${limitTemplate}${limit}`);
  const music = await datos.json();
  // console.log('>>>', music);

  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ':' + minutes;
  }
  let songsArray = [];

  music.map((item) => {
    const song = {
      title: item.title,
      artist: item.user.username,
      track_uri: item.stream_url,
      image_uri: item.artwork_url,
      sound_id: item.id,
      duration: time_convert(item.duration),
      views: item.playback_count,
      fuente: 'hearthis.at',
    };
    songsArray.push(song);
  });
  // console.log(songsArray);
  return songsArray;
};
