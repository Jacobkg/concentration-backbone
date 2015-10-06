window.CardCollection = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.on('change:isHidden', function() {
      var revealedModels = this.where({isHidden: false, isCompleted: false});
      if (revealedModels.length == 2) {
        this.disableCards();
        _.delay(this.revealCards, 1000, this, revealedModels[0], revealedModels[1]);
      }
    });
  },

  disableCards: function() {
    this.forEach(function(card) {
      card.set('isActive', false);
    })
  },

  enableCards: function() {
    this.forEach(function(card) {
      card.set('isActive', true);
    })
  },

  revealCards: function(collection, card1, card2) {
    if (card1.get('symbol') != card2.get('symbol')) {
      card1.set('isHidden', true);
      card2.set('isHidden', true)
    } else {
      card1.set('isCompleted', true);
      card2.set('isCompleted', true);
    }
    collection.enableCards();
  }
});