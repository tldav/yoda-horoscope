let isPlaying = false;

function playAudio() {
	const audio = document.getElementById("audio");
	isPlaying ? audio.pause() : audio.play();
	// if (isPlaying) {
	// 	audio.pause();
	// } else {
	// 	audio.play();
	// }

	audio.onplaying = function () {
		isPlaying = true;
	};
	audio.onpause = function () {
		isPlaying = false;
	};
}
