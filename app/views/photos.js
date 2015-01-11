var Backbone = require('backbone');
var moment = require('moment');

var photosTemplate = require('templates/photos.jst');

var Photos = Backbone.View.extend({

  template: photosTemplate,

  render: function() {
    this.$el.html(this.template({photos: this.collection.toJSON()}));
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  }

});
module.exports = Photos;
