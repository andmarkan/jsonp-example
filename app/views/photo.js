var Backbone = require('backbone');

var photoTemplate = require('templates/photo.hbs');

var Photo = Backbone.View.extend({

  template: photoTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Photo;
