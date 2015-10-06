window.Card = Backbone.Model.extend({

  initialize: function() {
    this.set('state', 'covered');
  },

  peek: function() {
    if (this.get('state') === 'covered') {
      this.set('state', 'peeked');
    }
  },

  cover: function() {
    this.set('state', 'covered');
  },

  solve: function() {
    this.set('state', 'solved');
  },

  isVisible: function() {
    return (this.get('state') == 'peeked' || this.get('state') == 'solved')
  },

  shownSymbol: function() {
    if (this.isVisible()) {
      return this.get('symbol');
    } else {
      return "";
    }
  }
});