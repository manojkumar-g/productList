var path = require('path')

var express = require('express')



const isDevelopment = process.argv.indexOf('--dev') !== -1
var app = express()


if(isDevelopment){
  var webpack = require('webpack')
  var config = require('./config/webpack/dev')
  var compiler = webpack(config)
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    hot : true,
    noInfo : true,
    stats: {
        colors: true
      }
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/index.html'))
  })
}
else{
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
  })
}



app.listen(1234, function(err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:1234/')
})
