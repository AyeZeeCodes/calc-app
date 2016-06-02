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
	$("#add form").submit(function(event) {
		var number1 = parseInt($("input#add1").val());
		//var calculate = $("#calculate").val();
		var number2 = parseInt($("input#add2").val());

		var result = add(number1, number2);
		alert(result);
		$("#result").text(result);
		$("#output").show();
		event.preventDefault();
	});

	$("#subtract form").submit(function(event) {
		var number1 = parseInt($("input#subtract1").val());
		//var calculate = $("#calculate").val();
		var number2 = parseInt($("input#subtract2").val());

		var result = subtract(number1, number2);
		alert(result);
		$("#result").text(result);
		$("#output").show();
		event.preventDefault();
	});

	$("#multiply form").submit(function(event) {
		var number1 = parseInt($("input#multiply1").val());
		//var calculate = $("#calculate").val();
		var number2 = parseInt($("input#multiply2").val());

		var result = multiply(number1, number2);
		alert(result);
		$("#result").text(result);
		$("#output").show();
		event.preventDefault();
	});

	$("#divide form").submit(function(event) {
		var number1 = parseInt($("input#divide1").val());
		//var calculate = $("#calculate").val();
		var number2 = parseInt($("input#divide2").val());

		var result = divide(number1, number2);
		alert(result);
		$("#result").text(result);
		$("#output").show();
		event.preventDefault();
	});
});
