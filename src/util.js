export const playAudio = (isplaying, audioRef) => {
	if (isplaying) {
		const audioPromise = audioRef.current.play();

		//* if the audio got loaded
		if (audioPromise !== undefined)
			audioPromise.then(() => audioRef.current.play());
	}
};
