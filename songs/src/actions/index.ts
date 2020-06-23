// Action cretor
import { Song } from '../interfaces'

export const selectSong = (song:Song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

