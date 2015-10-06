window.CardView = Backbone.View.extend({

  className: 'Tile',

  initialize: function() {
    this.listenTo(this.model, 'change:state', this.render);
    this.render();
  },

  events: {
    "click" : "flip",
  },

  flip: function() {
    this.model.peek();
  },

  render: function() {
    this.$el.html('<i class="fa ' + this.model.shownSymbol() + '"></i>');
    if (this.model.isVisible()) {
      this.$el.addClass('flipped');
    } else {
      this.$el.removeClass('flipped');
    }
    return this;
  }
});