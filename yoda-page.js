
//astrology ajax
myfunction2()
function myfunction2() {
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aries&day=today",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
		"x-rapidapi-key": "45362c1ca9msh6a653145b56fe97p190a61jsnedfdda4b419b",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

//yoda ajax

$.ajax(settings).then(function (fortune) {
	var fortuneW = (fortune.description)
	$("#western").append(fortuneW);
    
    var regSpeech = fortuneW;

    var fixed = (encodeURIComponent(regSpeech))
    
    var settings = {
	    "async": true,
	    "crossDomain": true,
	    "url": "https://yodish.p.rapidapi.com/yoda.json?text=" + fixed,
	    "method": "POST",
	    "headers": {
		  "x-rapidapi-host": "yodish.p.rapidapi.com",
		  "x-rapidapi-key": "45362c1ca9msh6a653145b56fe97p190a61jsnedfdda4b419b",
		  "content-type": "application/x-www-form-urlencoded"
	  },
	    "data": {}
}


    $.ajax(settings).done(function (response) {
          
		  console.log(response.contents.translated)
		  finishedp = response.contents.translated
		  $("#ys").append(finishedp)
      	
    });









});

}