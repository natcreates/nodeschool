function foo() {
	var bar = function zip() {
		var quux = 5;
	}
	// note that this quux would be given a sep global scope
	quux = 12;
}