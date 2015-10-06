window.Card = Backbone.Model.extend({

  initialize: function() {
    this.set('isHidden', true);
    this.set('isCompleted', false)
  },

  shownSymbol: function() {
    if (this.get('isHidden')) {
      return "?"
    } else {
      return this.get('symbol');
    }
  }
});