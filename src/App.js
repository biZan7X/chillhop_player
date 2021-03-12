import React, { useEffect } from "react";
import SongDetails from "./components/SongDetails";
import { connect } from "react-redux";
import "./styles/app.scss";

//& actions
import { setCurrentSong } from "./actions";

function App({ songsList, setCurrentSong, currentSong }) {
	useEffect(() => {
		setCurrentSong(songsList[0]);
	}, []);

	return (
		<div className="container">
			<SongDetails />
		</div>
	);
}

const mapStateToProp = (state) => {
	return { songsList: state.songsList, currentSong: state.currentSong };
};

export default connect(mapStateToProp, { setCurrentSong })(App);
