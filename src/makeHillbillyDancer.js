var HillbillyDancer = function(top, left, timeBetweenSteps){
 Dancer.call(this,top,left, timeBetweenSteps,"hillbillyDancer");  
};
HillbillyDancer.prototype = Object.create(Dancer.prototype);
HillbillyDancer.prototype.constructor= HillbillyDancer;
HillbillyDancer.prototype.step= function(){
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};  