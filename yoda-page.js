

//HS button function
$("button").click(function(){ 
	
	


	//takes value of the btn and puts it in the HS URL
	var sm = this.value
	
	console.log(this.value)
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" + sm + "&day=today",
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
		//normal fortune
		var fortuneW = (fortune.description)

		var fixed = (encodeURIComponent(fortuneW))
		console.log(fortuneW)
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
			//transaltes it to yoda talk 
			  console.log(response.contents.translated)
			  finishedp = response.contents.translated
			//clears the div and puts new input
			  $("#yodadiv").empty().append(finishedp)

		});
	});
	
	



})