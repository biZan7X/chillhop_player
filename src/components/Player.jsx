import React from "react";
import { connect } from "react-redux";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faStepForward,
	faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, audioRef, songInfo }) => {
	const onClickHandler = () => {
		audioRef.current.play(); //current : audio
	};

	const getTime = (time) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	return (
		<div className="player-container">
			<div className="display">
				<p>{getTime(songInfo.currentTime)}</p>
				<input type="range" />
				<p>{getTime(songInfo.duration)}</p>
			</div>

			<div className="controls">
				<FontAwesomeIcon icon={faStepBackward} size="2x" />
				<FontAwesomeIcon onClick={onClickHandler} icon={faPlay} size="2x" />
				<FontAwesomeIcon icon={faStepForward} size="2x" />
			</div>
		</div>
	);
};

const mapStateToProp = (state) => {
	return { currentSong: state.currentSong, songInfo: state.songInfo };
};

export default connect(mapStateToProp)(Player);
