var Backbone = require('backbone');

var controlsTemplate = require('templates/controls.jst');

var Controls = Backbone.View.extend({

  template: controlsTemplate,

  events: {
    'click button': 'updatePhotos'
  },

  updatePhotos: function() {
    this.collection.setAttribute({user: $('input[name="user"]').val()});
    this.collection.setAttribute({endpoint: $('select[name="endpoint"]').val()});
    this.collection.fetchUser();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
  }

});
module.exports = Controls;
