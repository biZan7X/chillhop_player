import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

//& actions
import { setCurrentSong } from "../actions";

const SongDetails = ({ currentSong, isPlaying }) => {
	if (!currentSong) return <div>Loading..</div>;

	const transAnimate = {
		hidden: {
			opacity: 0,
			y: 200,
		},
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: "easeIn" },
		},
	};

	return (
		<motion.div
			className="song-container"
			variants={transAnimate}
			initial="hidden"
			animate="show"
		>
			<img
				src={currentSong.cover}
				className={`${isPlaying ? "rotateSong" : ""}`}
				alt="songImage"
			/>

			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</motion.div>
	);
};

const mapStateToProp = (state) => {
	return {
		songsList: state.songsList,
		currentSong: state.currentSong,
		isPlaying: state.isplaying,
	};
};

export default connect(mapStateToProp, { setCurrentSong })(SongDetails);
