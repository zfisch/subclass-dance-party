var Jesus = function(top, left, timeBetweenSteps){
  this.$node=$("<img src='img/jesus.gif' class='jesus'></img>");
  this.setPosition(top, left);
  this.step();
};

Jesus.prototype.constructor = Jesus;

Jesus.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Jesus.prototype.step = function(){
  var endHeight = $(window).height();
  nodeFind=this.$node.find('img');
  this.$node.animate({height: "+=70%", left:"-=1000"}, 50000, 'easeInCubic');
};
