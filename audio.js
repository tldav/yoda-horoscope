let isPlaying = false;

function playAudio() {
	const audio = document.getElementById("audio");
	isPlaying ? audio.pause() : audio.play();

	audio.onplaying = () => {
		isPlaying = true;
	};
	audio.onpause = () => {
		isPlaying = false;
	};
}
