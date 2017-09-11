const spawn = require('child_process').spawn,
	duplexer = require('duplexer2');



module.exports = function(cmd, args) {
	//spawn the process and return a single stream
	// joining together the stdin and stdout here
	const childProcess = spawn(cmd, args);
	return duplexer(childProcess.stdin, childProcess.stdout);
}