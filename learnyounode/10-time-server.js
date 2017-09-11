var net  = require('net');

// net.createServer returns an instance of the server
var server = net.createServer(function listener(socket) {
	// every time the server receivers a connection, this wille xecute
	var today = new Date();
	var DD = today.getDate();
	// January is 0
	var MM = today.getMonth() + 1;

	if (DD < 10) {
		DD = '0' + DD;
	}

	if (MM < 10) {
		MM = '0' + MM;
	}
	var YY = today.getFullYear();
	var mm = today.getMinutes();
	var hh = today.getHours();
	var data = `${YY}-${MM}-${DD} ${hh}:${mm}\n`;
	socket.end(data);

})
server.listen(process.argv[2]);

// Official solution

//function zeroFill(i) {
//	return (i < 10 ? '0' : '') + i;
//}


//function now() {
//	var d = new Date();
//	return d.getFullYear + '-' + zeroFill(d.getMonth() + 1);
// and so on
//}