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
      songName: item.title,
      songArtist: item.user.username,
      songUrl: item.stream_url,
      songImage: item.artwork_url,
      songId: item.id,
      songDuration: time_convert(item.duration),
      songPlaysCount: item.playback_count,
    };
    songsArray.push(song);
  });
  // console.log(songsArray);
  return songsArray;
};
