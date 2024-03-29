"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function reverseDisplay(reverse) {
			document.getElementById("display").textContent = reverse;
	}

	function reverseString(str) {
		let result = [];

		for (let i = 0; i < str.length; i++) {
			result.unshift(str[i]);
		}

		return reverseDisplay(result.join(""));
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		reverseString(this.children[0].children[0].value);

		this.reset();
	});
};