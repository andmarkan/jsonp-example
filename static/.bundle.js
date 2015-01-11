(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Backbone = require('backbone');
Backbone.$ = jQuery;

var Photos = require('collections/photos');
var photos = new Photos();

var PhotosView = require('views/photos');
var photosView = new PhotosView({el: '#photos', collection: photos});

photos.fetchUser("52418443@N07");
// photos.fetchUser("74672051@N00");



},{"backbone":5,"collections/photos":2,"views/photos":4}],2:[function(require,module,exports){
var Backbone = require('backbone');

var public_photos = 'http://api.flickr.com/services/feeds/photos_public.gne';
var public_favs = 'http://api.flickr.com/services/feeds/photos_faves.gne';

var Photos = Backbone.Collection.extend({

  url: public_favs + '?format=json&size=s&jsoncallback=?',
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
    this.fetch({data: {id: user}});
  }

});
module.exports = Photos;

},{"backbone":5}]