module.exports = (app) => {
	app.get('/', (req, res) => {
		var other = req.session.other;
		req.session.testing="hello there";
		if(other){
		res.send(other);
		} else { res.render('index'); }
	});
	app.get('/test', (req, res) => {
		req.session.other="cats";
		res.send(req.session.testing);
	});
};
