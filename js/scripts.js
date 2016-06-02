var add = function(number1,number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1,number2) {
	return number1 * number2;
};

var divide = function(number1,number2) {
	return number1 / number2;
};


$(function() {
	$("#blanks form").submit(function(event) {
		var number1 = parseInt($("input#number1").val());
		//var calculate = $("#calculate").val();
		var number2 = parseInt($("input#number2").val());

		var result = add(number1, number2);
		alert(result);
		$("#result").text(result);
		$("#output").show();
		event.preventDefault();
	});
});
