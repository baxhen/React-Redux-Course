import React from 'react';
import { connect } from 'react-redux';

import { State, Song, SelectSong } from '../interfaces';
import { selectSong } from '../actions';

interface MyProps extends SelectSong {
    songs:Song[];   
    
}


class SongList extends React.Component<MyProps> {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
};

const mapStateToProps = (state:State) => {       
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList);

