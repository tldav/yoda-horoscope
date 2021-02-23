let isPlaying = false;

function playAudio() {
	const x = document.getElementById("myAudio");
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
