/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }

/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    playlists = [...playlists, { name: playlistName, songs: [] }];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    playlists = playlists.filter((playlist) => playlist.name !== playlistName);
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    // buscamos la playlist en el catálogo
    const playlist = playlists.find(
      (playlistItem) => playlistItem.name === playlistName
    );

    // devolvemos un error si no encontramos la playlist
    if (!playlist) {
      throw new Error("no existe esa playlist");
    }

    // actualizamos el catálogo
    playlists = playlists.map((playlistItem) => {
      return playlistItem.name === playlistName
        ? { ...playlist, songs: [...playlist.songs, song] }
        : playlistItem;
    });
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    // buscamos la playlist en el catálogo
    const playlist = playlists.find(
      (playlistItem) => playlistItem.name === playlistName
    );

    // devolvemos un error si la playlist no existe
    if (!playlist) throw new Error("No existe esa playlist");

    // verificamos si existe la canción
    const songExist = playlist.songs.some((song) => song.title === title);

    // devolvemos un error si la canción no existe
    if (!songExist) throw new Error("No existe esa cancion");

    // eliminamos la canción de la playlist
    const songs = playlist.songs.filter((song) => song.title !== title);

    // actualizamos la playlist
    playlists = playlists.map((playlistItem) => {
      return playlistItem.name === playlistName
        ? { ...playlist, songs }
        : playlistItem;
    });
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {};

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {};

  return {
    createPlaylist,
    addSongToPlaylist,
    removeSongFromPlaylist,
    sortSongs,
    getAllPlaylists,
    removePlaylist,
    favoriteSong,
  };
};

export default musicCatalog;
