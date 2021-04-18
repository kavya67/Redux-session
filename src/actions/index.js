export const selectSong = (song) => {// action creator
    return { //action
        type: "SELECT_SONG",
        payload: song
    }
}