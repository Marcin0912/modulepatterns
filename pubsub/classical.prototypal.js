
var Person = function(name) {
	this.name = name;

};

Person.prototype.sayName = function() {
	console.log(this.name);
}

var john = new Person("john");
var bobby = new Person("bobby");

