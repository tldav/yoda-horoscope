// this will play the music on the first index page after the user hits play audio

var x = document.getElementById("myAudio"); 

function playAudio() { 
    $("#disappear").css("display", "none")
  x.play(); 
} 
$(document).ready(function () {
    
$('#proceed').delay(95000).show(0); 

})