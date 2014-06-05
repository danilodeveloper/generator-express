var express = require('express'),
    compress = require('compression'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    bodyParser = require('body-parser')
    methodOverride = require('method-override');

module.exports = function(app, config) {
  app.configure(function () {
    app.use(compress());
    app.use(express.static(config.root + '/public'));
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    <% if (options.viewEngine == 'ejs') { %>
        app.engine('ejs', require('ejs-locals'));
    <% } %>
    app.set('view engine', '<%= options.viewEngine %>');
    app.use(favicon(config.root + '/public/img/favicon.ico'));
    app.use(morgan());
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(function (req, res) {
      res.status(404).render('404', { title: '404' });
    });
  });
};
