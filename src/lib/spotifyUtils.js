// This function recives a list of songs and a limit,
// It will return a array of songs of limit length or
// false if dosen't have enought data.
export const getOnlySongsWithPreview = (listOfSongs, limit) => {
  let numberOfPreviewUrls = 0;
  let arrayOfSongsVerified = [];
  for (let i = 0; i < listOfSongs.length; i++) {
    if (listOfSongs[i].track.preview_url) {
      numberOfPreviewUrls++;
      arrayOfSongsVerified.push(listOfSongs[i]);
    }
  }
  return numberOfPreviewUrls === limit ? arrayOfSongsVerified : [];
};
