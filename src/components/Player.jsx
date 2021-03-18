import React from "react";
import { connect } from "react-redux";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faStepForward,
	faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
//&actions
import { setCurrentTime, setIsPlaying } from "../actions";

const Player = ({
	currentSong,
	audioRef,
	songInfo,
	setCurrentTime,
	isplaying,
	setIsPlaying,
}) => {
	const onClickHandler = () => {
		//current : audio
		if (isplaying) audioRef.current.pause();
		else audioRef.current.play();

		setIsPlaying(!isplaying);
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	const dragHandler = (e) => {
		//* updating the state & display
		setCurrentTime(e.target.value);

		//* updating the audio
		audioRef.current.currentTime = e.target.value;
	};

	return (
		<div className="player-container">
			<div className="display">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={isNaN(songInfo.duration) ? 0 : songInfo.duration}
					value={isNaN(songInfo.currentTime) ? 0 : songInfo.currentTime}
					onChange={dragHandler}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>

			<div className="controls">
				<FontAwesomeIcon icon={faStepBackward} size="2x" />
				<FontAwesomeIcon
					onClick={onClickHandler}
					icon={isplaying ? faPause : faPlay}
					size="2x"
				/>
				<FontAwesomeIcon icon={faStepForward} size="2x" />
			</div>
		</div>
	);
};

const mapStateToProp = (state) => {
	return {
		currentSong: state.currentSong,
		songInfo: state.songInfo,
		isplaying: state.isplaying,
	};
};

export default connect(mapStateToProp, { setCurrentTime, setIsPlaying })(
	Player
);
