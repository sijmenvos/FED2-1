function Person(name){
	this.name = name;
	this.speak = function() {
		console.log('Hi my name is ' + this.name + '.');
	}
}

Person.prototype.walk = function(location) {
	this.location = location;
	console.log(this.name + ' walks to ' + this.location + '.')
};

Person.prototype.eat = function(food) {
	this.food = food;
	console.log(this.name + ' eats a ' + this.food + '.')
};

sjaak = new Person ('Sjaak');
sjaak.speak();
sjaak.walk('school')
sjaak.eat('banana');