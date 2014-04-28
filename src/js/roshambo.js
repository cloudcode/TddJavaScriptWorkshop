module.exports = Roshambo;

Roshambo.prototype = {
	players: 2,
	shoot: function(p1, p2) {
		if (typeof p2 === 'undefined')
			p2 = plays.rock;

		if (typeof this.winnersTable[p1] === 'undefined'
			|| typeof this.winnersTable[p1][p2] === 'undefined')
			throw 'Must provide valid input!';

		return this.winnersTable[p1][p2];
	}
};

var plays = {
	scissors: 1,
	rock: 2,
	paper: 3
};
Roshambo.plays = plays;

function Roshambo() {
	var win = {};
	win[plays.scissors] = {};
	win[plays.scissors][plays.scissors] = 0;
	win[plays.scissors][plays.rock] = 2;
	win[plays.scissors][plays.paper] = 1;

	win[plays.rock] = {};
	win[plays.rock][plays.scissors] = 1;
	win[plays.rock][plays.rock] = 0;
	win[plays.rock][plays.paper] = 2;

	win[plays.paper] = {};
	win[plays.paper][plays.scissors] = 2;
	win[plays.paper][plays.rock] = 1;
	win[plays.paper][plays.paper] = 0;
	this.winnersTable = win;
}
