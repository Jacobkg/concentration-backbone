window.CardView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
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