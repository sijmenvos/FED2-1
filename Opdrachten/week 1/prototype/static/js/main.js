function Person(name){
	this.name = name;
	this.speak = function() {
		console.log('Hi my name is ' + this.name + '.');
	}
}

Person.prototype.walk = function(location) {
	this.walk = location;
	console.log(this.name + ' walks to ' + this.walk + '.')
};

Person.prototype.eat = function(food) {
	this.eat = food;
	console.log(this.name + ' eats a ' + this.eat + '.')
};

sjaak = new Person ('Sjaak');
sjaak.speak();
sjaak.walk('school')
sjaak.eat('banana');