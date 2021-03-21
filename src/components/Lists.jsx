import React from "react";
import { connect } from "react-redux";
//& actions
import { setCurrentSong } from "../actions";

const Lists = ({ songsList, setCurrentSong }) => {
	const renderlist = songsList.map((song) => {
		return (
			<div
				key={song.id}
				onClick={() => setCurrentSong(song)}
				className="song"
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
	return { songsList: state.songsList };
};

export default connect(mapStateToProps, { setCurrentSong })(Lists);
