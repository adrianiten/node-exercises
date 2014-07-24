var fs = require('fs');
fs.readFile("/Users/user1/Desktop/ggg.txt", function (err, content) {
	if (err) {
  		throw err;
	}
	console.log(content.toString());
});
