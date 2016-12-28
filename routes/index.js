var request = require('request');

module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.render('testing', { vue: true });
	});
	
	app.get('/lookup/:lookup', (req, res) => { 
		var lookup = req.params.lookup ? req.params.lookup : 'shudder',
			options = {
				url: `https://api-public.guidebox.com/v1.43/US/${process.env.GUIDEBOX_API}/movies/all/0/10/${lookup}`,
				header: {'Content-Type' : 'application/json'}};
		request.get(options, (e, r, b) => {
			var results = JSON.parse(b);
			res.send(results);
		}).on('error', (err) => { res.send("ERROR") }); 
	});

	app.get('/home/:name', (req, res) => {
		var nameExists = ( name ) => { return db.getAsync(name) },
			setName = ( name ) => { return db.setAsync( 'name', name ) };
		
		nameExists('name').then( 
			(name_exists) => { 
				if ( name_exists && name_exists == username ){ 
					res.render('index', { myname: username, exists: true});
				} else { 
					setName(username).then(()=>res.render('index', {myname: username})); 
				}
			}
		);
	});
};
