import React from "react";

import { connect } from "react-redux";

class SongDetails extends React.Component {
  render() {
    if (!this.props.song) {
      return <div>loading...</div>;
    }
    return <div>{this.props.song.duration}</div>;
  }
}

const mapStateProps = (state) => {
  return {
    song: state.songDetail,
  };
};

export default connect(mapStateProps)(SongDetails);
