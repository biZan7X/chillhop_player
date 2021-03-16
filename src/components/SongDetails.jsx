import React from "react";
import { connect } from "react-redux";

//& actions
import { setCurrentSong } from "../actions";

const SongDetails = ({ songsList, currentSong, setCurrentSong }) => {
	if (!currentSong) return <div>Loading..</div>;

	return (
		<div className="song-container">
			<img src={currentSong.cover} alt="songImage" />

			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

const mapStateToProp = (state) => {
	return { songsList: state.songsList, currentSong: state.currentSong };
};

export default connect(mapStateToProp, { setCurrentSong })(SongDetails);
