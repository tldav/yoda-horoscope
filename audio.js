let isPlaying = false;

function playAudio() {
	const audio = document.getElementById("audio");
	isPlaying ? audio.pause() : audio.play();

	audio.onplaying = function () {
		isPlaying = true;
	};
	audio.onpause = function () {
		isPlaying = false;
	};
}
