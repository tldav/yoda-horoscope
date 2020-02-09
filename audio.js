// when the audio button is clicked, 
// the audio button will dissappear and music will start:
  function playAudio() { 
    console.log("playAudio")
    var x = document.getElementById("myAudio");
    $("#disappear").css("display", "none")
    x.play(); 
  }

// after 15000 ms, a footer with nav link will show in case user
// wants to skip music and intro
  $(document).ready(function(){
  setTimeout(function(){
    document.getElementById('footerHide').classList.remove('hide');
  }, 10000);
// the ugly play music button [required by google :()]
// will disaaper after 1000 ms
  setTimeout(function(){
    document.getElementById('disappear').classList.add('hide');
  }, 5000);
})