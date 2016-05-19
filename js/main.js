window.onload = function(argument) {
	try {
		$();
		console.log("The JQuery and javascript are running!");
	} catch (str) {
		console.error("The JQuery is NOT running! but javascript is running!!");
	}

	$(".container").delay(500).animate({
		scrollTop: 300},
		300, function() {
		console.log("animation done");
	});;

	$(".container").scroll(function(event) {
		console.log(this.scrollTop);
	});

}