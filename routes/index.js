module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.redirect('/home/justin');
	});
	
	app.get('/home/:name', (req, res) => {
		var nameExists = ( name ) => { return db.getAsync(name) },
			setName = ( name ) => { return db.setAsync( 'name', name ) },
			username = req.params.name ? (req.params.name[0].toUpperCase() + req.params.name.substring(1)) : 'noname';
		
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
