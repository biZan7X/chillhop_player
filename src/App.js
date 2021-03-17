import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

//& components
import SongDetails from "./components/SongDetails";
import Player from "./components/Player";
import "./styles/app.scss";

//& actions
import {
	setCurrentSong,
	setCurrentTime,
	setDuration,
	setPercentage,
} from "./actions";

function App({ songsList, setCurrentSong, currentSong }) {
	//*componentDidMount
	useEffect(() => {
		setCurrentSong(songsList[0]);
	}, []);

	//*setting up the songInfos
	const onTimeUpdateHandler = () => {
		console.log(audioRef);
	};

	const audioRef = useRef();

	return (
		<div className="container">
			<SongDetails />
			<Player audioRef={audioRef} />
			<audio
				ref={audioRef}
				onTimeUpdate={onTimeUpdateHandler}
				src={currentSong ? currentSong.audio : null}
			></audio>
		</div>
	);
}

const mapStateToProp = (state) => {
	return {
		songsList: state.songsList,
		currentSong: state.currentSong,
		songInfo: state.songInfo,
	};
};

export default connect(mapStateToProp, {
	setCurrentSong,
	setCurrentTime,
	setDuration,
	setPercentage,
})(App);
