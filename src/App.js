import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

//& components
import SongDetails from "./components/SongDetails";
import Player from "./components/Player";
import "./styles/app.scss";

//& actions
import { setCurrentSong } from "./actions";

function App({ songsList, setCurrentSong, currentSong }) {
	//*componentDidMount
	useEffect(() => {
		setCurrentSong(songsList[0]);
	}, []);

	const audioRef = useRef();

	return (
		<div className="container">
			<SongDetails />
			<Player />
			<audio ref={audioRef} src={currentSong}></audio>
		</div>
	);
}

const mapStateToProp = (state) => {
	return { songsList: state.songsList, currentSong: state.currentSong };
};

export default connect(mapStateToProp, { setCurrentSong })(App);
