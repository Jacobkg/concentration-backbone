window.Card = Backbone.Model.extend({

  initialize: function() {
    this.set('isHidden', true);
  },

  shownSymbol: function() {
    if (this.get('isHidden')) {
      return "?"
    } else {
      return this.get('symbol');
    }
  }
});