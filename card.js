window.Card = Backbone.Model.extend({

  initialize: function() {
    this.set('isHidden', true);
    this.set('isActive', true);
    this.set('isCompleted', false)
  },

  reveal: function() {
    if (this.get('isActive')) {
      this.set('isHidden', false);
    }
  },

  shownSymbol: function() {
    if (this.get('isHidden')) {
      return "?"
    } else {
      return this.get('symbol');
    }
  }
});