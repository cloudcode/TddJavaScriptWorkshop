var roshambo = require('../js/roshambo');

var plays = roshambo.plays;

describe('core functionality', function(){

	beforeEach(function(){
		this.game = new roshambo();
	});

	it('has two players', function() {
		expect(this.game.players).toBe(2);
	});

	it('paper beats rock', function() {
		expect(this.game.shoot(plays.paper, plays.rock)).toBe(1);
		expect(this.game.shoot(plays.rock, plays.paper)).toBe(2);
	});


	it('rock beats scissors', function() {
		expect(this.game.shoot(plays.rock, plays.scissors)).toBe(1);
		expect(this.game.shoot(plays.scissors, plays.rock)).toBe(2);
	});

	it('scissors beats paper', function() {
		expect(this.game.shoot(plays.scissors, plays.paper)).toBe(1);
		expect(this.game.shoot(plays.paper, plays.scissors)).toBe(2);
	});

	it('same play is a tie', function() {
		expect(this.game.shoot(plays.scissors, plays.scissors)).toBe(0);
		expect(this.game.shoot(plays.paper, plays.paper)).toBe(0);
		expect(this.game.shoot(plays.rock, plays.rock)).toBe(0);
	});

	it('fails when given 0', function() {
		var game = this.game;
		expect(function() {
			game.shoot(plays.rock, 0);
		}).toThrow();
	});

});