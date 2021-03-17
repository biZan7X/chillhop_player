export const setCurrentSong = (song) => {
	//! action
	return {
		type: "setCurrentSong",
		payload: song,
	};
};

export const setCurrentTime = (time) => {
	return {
		type: "setCurrentTime",
		payload: time,
	};
};

export const setDuration = (duration) => {
	return {
		type: "setDuration",
		payload: duration,
	};
};

export const setPercentage = (percentage) => {
	return {
		type: "setPercentage",
		payload: percentage,
	};
};
