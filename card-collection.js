window.CardCollection = Backbone.Collection.extend({
  model: Card,

  initialize: function() {
    this.on('change', function(a,b,c) {
      var revealedModels = this.where({isHidden: false});
      if (revealedModels.length == 2) {
        _.delay(this.revealCards, 1000, revealedModels);
      }
    });
  },

  revealCards: function(cards) {
    _.each(cards, function(card) {
      card.set('isHidden', true);
    })
  }
});