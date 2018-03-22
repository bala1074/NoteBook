module.exports = function(app) {

  app.get('/notes', function(req, res) {
		res.send('Hey,Im from notes'); // load the index.ejs file
  });
  
}