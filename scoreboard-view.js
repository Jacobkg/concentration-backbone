window.ScoreboardView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {
    var template = _.template($("#scoreboard-template").html());
    this.$el.html( template({ playerOneScore: this.model.playerOneScore(),
                              playerTwoScore: this.model.playerTwoScore(),
                              currentPlayer: this.model.currentPlayer() } ));
    return this;
  }

});