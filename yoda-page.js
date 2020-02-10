//HS button function
$("button").click(function() {
	// when btn is clicked, the h2 disapears 
	$("#placeholder").addClass("hide");

	//takes value of the btn and puts it in the HS URL
	var sm = this.value;
	console.log(this.value);
	//changing the picture src to specfic sign picked
	switch (sm) {
		case "aries":
			$(".sign").attr("src", "assets/aries.jpeg");
			break;
		case "taurus":
			$(".sign").attr("src", "assets/Taurus.jpg");
			break;
		case "gemini":
			$(".sign").attr("src", "assets/gemini.jpg");
			break;
		case "cancer":
			$(".sign").attr("src", "assets/cancer.jpeg");
			break;
		case "leo":
			$(".sign").attr("src", "assets/leo.JPEG");
			break;
		case "virgo":
			$(".sign").attr("src", "assets/virgo.jpg");
			break;
		case "libra":
			$(".sign").attr("src", "assets/libra.jpeg");
			break;
		case "scorpio":
			$(".sign").attr("src", "assets/scorpio.jpeg");
			break;
		case "sagittarius":
			$(".sign").attr("src", "assets/sag.png");
			break;
		case "capricorn":
			$(".sign").attr("src", "assets/capricorn.jpeg");
			break;
		case "aquarius":
			$(".sign").attr("src", "assets/aq.jpeg");
			break;
		case "pisces":
			$(".sign").attr("src", "assets/pi.jpeg");
			break;
	}
	// var with ajax paramaters
	var settings = {
		async: true,
		crossDomain: true,
		url:
			"https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" +
			sm +
			"&day=today",
		method: "POST",
		headers: {
			"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"45362c1ca9msh6a653145b56fe97p190a61jsnedfdda4b419b",
			"content-type": "application/x-www-form-urlencoded"
		},
		data: {}
	};
	//hs ajax
	$.ajax(settings).then(function(fortune) {
		//normal fortune
		var fortuneW = fortune.description;

		var fixed = encodeURIComponent(fortuneW);
		console.log(fortuneW);
		var settings = {
			async: true,
			crossDomain: true,
			url: "https://yodish.p.rapidapi.com/yoda.json?text=" + fixed,
			method: "POST",
			headers: {
				"x-rapidapi-host": "yodish.p.rapidapi.com",
				"x-rapidapi-key":
					"45362c1ca9msh6a653145b56fe97p190a61jsnedfdda4b419b",
				"content-type": "application/x-www-form-urlencoded"
			},
			data: {}
		};
		// yoda ajax
		$.ajax(settings).done(function(response) {
			//transaltes it to yoda talk
			console.log(response.contents.translated);
			finishedp = response.contents.translated;
			//clears the div and puts new input
			$("#yodadiv")
				.empty()
				.append(finishedp);
		});
		// 1st ajax ends
	});
	// btn ends
});
