const audio = document.getElementById("audio");
let isPlaying = false;

function playAudio() {
	isPlaying ? audio.pause() : audio.play();

	audio.onplaying = () => {
		isPlaying = true;
	};
	audio.onpause = () => {
		isPlaying = false;
	};
}
