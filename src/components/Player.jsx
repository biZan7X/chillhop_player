import React from "react";
import { connect } from "react-redux";
//& icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faStepForward,
	faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, audioRef }) => {
	const onClickHandler = () => {
		audioRef.current.play(); //current : audio
	};

	return (
		<div className="player-container">
			<div className="display">
				<p>0:0</p>
				<input type="range" />
				<p>3:00</p>
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
	return { currentSong: state.currentSong };
};

export default connect(mapStateToProp)(Player);
