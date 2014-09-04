var person = { 
	name: "Sjaak", 

	location: "school",

	food: "banana",

	speak: function() {
		console.log('Hi my name is ' + this.name + '.');
	},

	walk: function(location) {
		console.log(this.name + ' walks to ' + this.location + '.');
	},

	eat: function(food) {
		console.log(this.name + ' eats a ' + this.food + '.');
	}
};

person.speak();
person.walk();
person.eat();