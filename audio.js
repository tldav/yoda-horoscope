// when the audio button is clicked,
// the audio button will dissappear and music will start:
var isPlaying = false;

function playAudio() {
	var x = document.getElementById("myAudio");
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
