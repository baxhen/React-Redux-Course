export interface Song {
    title:string;
    duration:string;
}

export interface SongAction {
    type:string;
    payload:Song;
}

export interface State {
    selectedSong: null | Song;
    songs: Song[];
}

export interface SelectSong {
    selectSong(song:Song):void;
}