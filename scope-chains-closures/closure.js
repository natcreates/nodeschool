function foo() {
	var bar;
	function zip() {
		var quux = 5;
		bar = true;
	}
	// note that this quux would be given a sep global scope
	quux = 12;
	// zip closes over the var bar from parent scope
	// maintaining access to it
	// this means that the whole scope chain is stored in memory
	// as bar still needs to be reached and resolved
	// until zip() is no longer required
	// the Mark and Sweep algorithm marks any memory allocations that are still reachable
	// and frees up the rest
	// when Garbage Collection occurs, this blocks the main thread
	// other JS cannot be executed until it completes
	return zip;
}