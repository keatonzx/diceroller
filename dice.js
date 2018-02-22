var sides = 6;
var numberdice = 5;
var dicerolled = [numberdice];

document.getElementById('sides').innerHTML = sides;
document.getElementById('numberdice').innerHTML = numberdice;


function dicearr(){
  for (var i = 0; i < numberdice; i++){
    dicerolled[i] = rollside(sides+1);
  }
}

function rolldice(numberdice, sides) {
	for (var i = 0; i < numberdice; i++) {
		var di = rollside(sides + 1);
	}
}

function rollside(sides) {
	return Math.floor(Math.random() * sides);
}

function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = dicerolled[0];
    cell2.innerHTML = dicerolled[1];
    cell3.innerHTML = dicerolled[0]+dicerolled[1];
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(0);
}
