import React from "react";
import { connect } from "react-redux";
import { playAudio } from "../util";
//& actions
import { setCurrentSong } from "../actions";

const Lists = ({
	songsList,
	currentSong,
	setCurrentSong,
	audioRef,
	isplaying,
}) => {
	const onClickHandler = (song) => {
		setCurrentSong(song);

		playAudio(isplaying, audioRef);

		console.log(songsList);

		const newSongs = songsList.map((song) => {
			if (song.id === currentSong.id) song.active = true;
			else song.active = false;

			return song;
		});

		// setSongsList(newSongs);
	};
	const renderlist = songsList.map((song) => {
		return (
			<div
				key={song.id}
				onClick={() => onClickHandler(song)}
				className={`song`}
			>
				<img src={song.cover} alt="song cover" />
				<div className="details">
					<h3>{song.name}</h3>
					<p>{song.artist}</p>
				</div>
			</div>
		);
	});

	return <div className="lists">{renderlist}</div>;
};

const mapStateToProps = (state) => {
	return {
		songsList: state.songsList,
		currentSong: state.currentSong,
		isplaying: state.isplaying,
	};
};

export default connect(mapStateToProps, { setCurrentSong })(Lists);
