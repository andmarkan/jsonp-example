var Backbone = require('backbone');

// subviews
var Controls = require('views/controls');
var Photos = require('views/photos');

// template
var layoutTemplate = require('templates/layout.jst');

var Layout = Backbone.View.extend({

  template: layoutTemplate,

  render: function() {

    this.$el.html(this.template());
    this.photosList.setElement(this.$('#photos')).render();
    this.controls.setElement(this.$('#controls')).render();

    return this;
  },

  initialize: function() {
    this.photosList = new Photos({collection: this.collection});
    this.controls = new Controls({collection: this.collection});

    // this.collection.fetchUser("52418443@N07");
    this.collection.fetchUser();
  }



});
module.exports = Layout;
