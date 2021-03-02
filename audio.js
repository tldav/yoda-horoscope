let isPlaying = false;

function playAudio() {
	const x = document.getElementById("my-audio");
	if (isPlaying) {
		x.pause();
	} else {
		x.play();
	}

	x.onplaying = function () {
		isPlaying = true;
	};
	x.onpause = function () {
		isPlaying = false;
	};
}
