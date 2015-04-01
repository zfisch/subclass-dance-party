var volkDancer1 = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("volkDancer1");
  this.$node.append("<img src='img/dancing1.gif'></img>");
  this.$node.on('click', function(){
  $(this).toggleClass("flipped");

  });
};

volkDancer1.prototype = Object.create(makeDancer.prototype);
volkDancer1.prototype.constructor = volkDancer1;

volkDancer1.prototype.step = function(){
  makeDancer.prototype.step.call(this);
};
