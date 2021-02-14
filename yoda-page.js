// yoda-page.js
$("button").click(function () {
	$("#placeholder").addClass("hide");

	const sign = this.value;
	console.log(sign);
	switch (sign) {
		case "aries":
			$(".sign").attr("src", "assets/aries.png");
			break;
		case "taurus":
			$(".sign").attr("src", "assets/taurus.png");
			break;
		case "gemini":
			$(".sign").attr("src", "assets/gemini.png");
			break;
		case "cancer":
			$(".sign").attr("src", "assets/cancer.png");
			break;
		case "leo":
			$(".sign").attr("src", "assets/leo.png");
			break;
		case "virgo":
			$(".sign").attr("src", "assets/virgo.JPEG");
			break;
		case "libra":
			$(".sign").attr("src", "assets/libra.png");
			break;
		case "scorpio":
			$(".sign").attr("src", "assets/scorpio.jpeg");
			break;
		case "sagittarius":
			$(".sign").attr("src", "assets/sag.png");
			break;
		case "capricorn":
			$(".sign").attr("src", "assets/capricorn.png");
			break;
		case "aquarius":
			$(".sign").attr("src", "assets/aquarius.jpeg");
			break;
		case "pisces":
			$(".sign").attr("src", "assets/pisces.png");
			break;
	}

	const aztroConfig = {
		async: true,
		crossDomain: true,
		url:
			"https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=" +
			sign +
			"&day=today",
		method: "POST",
		headers: {
			"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
			"x-rapidapi-key":
				"f4eb776decmsh99b8177e1d20cc3p194787jsnd906d5734e83",
			"content-type": "application/x-www-form-urlencoded"
		},
		data: {}
	};

	$.ajax(aztroConfig).then(function (response) {
		const dailyHoroscope = response.description;

		const dailyHoroscopeFix = encodeURIComponent(dailyHoroscope);
		const yodaConfig = {
			async: true,
			crossDomain: true,
			url:
				"https://yodish.p.rapidapi.com/yoda.json?text=" +
				dailyHoroscopeFix,
			method: "POST",
			headers: {
				"x-rapidapi-host": "yodish.p.rapidapi.com",
				"x-rapidapi-key":
					"f4eb776decmsh99b8177e1d20cc3p194787jsnd906d5734e83",
				"content-type": "application/x-www-form-urlencoded"
			},
			data: {}
		};

		$.ajax(yodaConfig).done(function (response) {
			translatedHoroscope = response.contents.translated;
			$("#yodadiv").empty().append(translatedHoroscope);
		});
	});
});
