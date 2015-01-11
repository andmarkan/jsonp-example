var Backbone = require('backbone');
Backbone.Attributes = require('backbone.attributes');
var _ = require('underscore');

var endpoints = {
  stream: 'http://api.flickr.com/services/feeds/photos_public.gne',
  faves: 'http://api.flickr.com/services/feeds/photos_faves.gne'
};

var Photos = Backbone.Collection.extend({

  url: function() {
    var endpoint = endpoints[this.getAttribute('endpoint')];
    if (!endpoint) {
      endpoint = endpoints.stream;
    }
    return endpoint + '?format=json&size=s&jsoncallback=?';
  },
  sync: function(method, collection, options) {
    options.dataType = "jsonp";
    options.jsonpCallback = "jsonpCallback";
    return Backbone.sync(method, collection, options);
  },

  parse: function(resp) {
    console.log(resp.items);
    return resp.items;
  },

  fetchUser: function(user) {
    this.fetch({data: {id: this.getAttribute('user')}});
  }


});

_.defaults(Photos.prototype, Backbone.Attributes);
module.exports = Photos;
