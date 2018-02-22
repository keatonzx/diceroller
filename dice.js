var sides = 6;
var numberdice = 5;

document.getElementById('sides').innerHTML = sides;
document.getElementById('numberdice').innerHTML = numberdice;

rolldice(numberdice, sides);

function rolldice(numberdice, sides) {
	var total = 0;

	for (var i = 0; i < numberdice; i++) {
		var di = rollside(sides + 1);
		total += di;
    document.getElementById("mydice").innerHTML += ('Dice ' + (i+1) + ' = ' + di+" ");
	}
  document.getElementById("total").innerHTML = ("Total: "+ total);

}

function rollside(sides) {
	return Math.floor(Math.random() * sides);
}
