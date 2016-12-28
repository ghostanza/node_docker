exports.getJSON = function(res, options, callback){
	var protocol = options.port == 443 ? https : http;
	var req = protocol.request(options, ( response ) => {
		var output = '';
		response.setEncoding('utf-8');
		
		response.on('data', (chunk) => {
			output += chunk;
		});

		response.on('end', () => {
			var obj = JSON.parse(output);
			callback(res.statusCode, obj);
		});
	});
	
	req.on('error', (error) => { 
		res.send('error: ' + error.message) 
	});

	req.end();
}
	
