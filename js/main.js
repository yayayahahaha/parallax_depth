window.onload = function(argument) {
	var parallax_array = document.getElementsByClassName('parallax');

	for (var i = 0; i < parallax_array.length; i++) {
		console.log(parallax_array[i].offsetTop);
	}
}