var playlist = { artistName: "songTitle"};

function updatePlaylist(obj, name, title) {
  obj[name] = title;
  return obj;
}