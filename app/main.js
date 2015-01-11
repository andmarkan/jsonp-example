var Backbone = require('backbone');
Backbone.$ = jQuery;

var Photos = require('collections/photos');
var photos = new Photos();
photos.setAttribute({user: '52418443@N07'});
photos.setAttribute({endpoint: 'stream'});

var Layout = require('views/layout');

$(document).ready(function() {

  layout = new Layout({collection: photos});
  document.body.appendChild(layout.render().el);

});


