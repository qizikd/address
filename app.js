var createError = require('http-errors');
var express = require('express');

var mnemonicRouter = require('./mnemonic/mnemonic');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mnemonicRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var server = app.listen(8080, function () {   //监听端口
    var host = server.address().address
    var port = server.address().port
    console.log('address app listening at http://%s:%s', host, port);
})
