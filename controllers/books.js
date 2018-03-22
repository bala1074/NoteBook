module.exports = function(app) {

  app.get('/books', function(req, res) {
		res.send('Hey,Im from books'); // load the index.ejs file
  });
  
}