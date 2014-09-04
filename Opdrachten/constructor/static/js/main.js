function Person(name){
	this.name = name;
	this.speak = function() {
		console.log('Hi my name is ' + this.name + '.');
	}
}

sjaak = new Person ('Sjaak');
sjaak.speak();