import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  render() {
    return (
      <div>
        {this.props.songs.map((song) => {
          return (
            <div key={song.title}>
              <div>{song.title}</div>
              <button
                onClick={() => {
                  this.props.selectSong(song);
                }}
              >
                Song Detail
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    songs: state.songReducer,
  };
};

export default connect(mapStateProps, { selectSong })(SongList);
