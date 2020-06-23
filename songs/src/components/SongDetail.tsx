import React from 'react';
import { Song, State } from '../interfaces';
import { connect } from 'react-redux';

interface MyProps  {
    song:Song | null;      
}



const SongDetail: React.FC <MyProps> = ({song}) => {

    if(!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration} 
            </p>
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return { song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);