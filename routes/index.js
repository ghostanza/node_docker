module.exports = (app, redis) => {
	app.get('/', (req, res) => {
		res.render('index');
	});
	app.get('/test', (req, res) => {
		res.send("testing");
	});
};
