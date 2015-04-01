var volkDancer2 = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("volkDancer2");
  this.$node.append("<img src='img/dancing2.gif'></img>");
  this.$node.on('click', function(){
    $(this).toggleClass("flipped");

  });
};

volkDancer2.prototype = Object.create(makeDancer.prototype);
volkDancer2.prototype.constructor = volkDancer2;

volkDancer2.prototype.step = function(){
  makeDancer.prototype.step.call(this);
};
