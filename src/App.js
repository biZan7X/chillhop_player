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
import { playAudio } from "./util";

function App({
	songsList,
	setCurrentSong,
	currentSong,
	songInfo,
	setCurrentTime,
	setDuration,
	setPercentage,
	isplaying,
}) {
	//*componentDidMount
	useEffect(() => {
		setCurrentSong(songsList[0]);
	}, []);

	//*setting up the songInfos
	const onTimeUpdateHandler = () => {
		setCurrentTime(audioRef.current.currentTime);
		setDuration(audioRef.current.duration);

		const percentage = Math.floor(
			(songInfo.currentTime / songInfo.duration) * 100
		);
		setPercentage(percentage);

		//* auto skip feature
		const index = songsList.findIndex((ob) => ob.name === currentSong.name);
		if (songInfo.currentTime && songInfo.currentTime === songInfo.duration)
			setCurrentSong(songsList[(index + 1) % songsList.length]);
		playAudio(isplaying, audioRef);
	};

	const audioRef = useRef();

	return (
		<div className="container">
			<SongDetails />
			<Player audioRef={audioRef} />
			<audio
				ref={audioRef}
				onLoadedMetadata={onTimeUpdateHandler}
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
		isplaying: state.isplaying,
	};
};

export default connect(mapStateToProp, {
	setCurrentSong,
	setCurrentTime,
	setDuration,
	setPercentage,
})(App);
