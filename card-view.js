window.CardView = Backbone.View.extend({

  className: 'Tile',

  initialize: function() {
    this.listenTo(this.model, 'change:isHidden', this.render);
    this.render();
  },

  events: {
    "click" : "reveal",
  },

  reveal: function() {
    this.model.reveal();
  },

  render: function() {
    this.$el.html(this.model.shownSymbol());
    return this;
  }
});