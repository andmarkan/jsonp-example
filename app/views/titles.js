var Backbone = require('backbone');

var titlesTemplate = require('templates/titles.hbs');

var Titles = Backbone.View.extend({

  template: titlesTemplate,

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});
module.exports = Titles;
