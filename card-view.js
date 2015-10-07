window.CardView = Backbone.View.extend({

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
    var template = _.template($("#card-template").html());
    this.$el.html( template({ isVisible: this.model.isVisible(), symbol: this.model.get('symbol') } ));
    return this;
  }
});