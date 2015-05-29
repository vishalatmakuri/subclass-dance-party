var FancyDancer = function(top, left, timeBetweenSteps,css,image){
  var temp = Math.random() * 600;
  ImageDancer.call(this,top,left, timeBetweenSteps,"fancyDancer","images/bananna.gif",temp);  
  //this.step();
};

FancyDancer.prototype = Object.create(ImageDancer.prototype);
FancyDancer.prototype.constructor= FancyDancer;
FancyDancer.prototype.step= function(){
  
    ImageDancer.prototype.step.call(this);  	
  
  
  
  var danceMove=50;
  //if(this.danceStepControl){danceMove=50;}
  //else{danceMove=0;}
  

  var coord = this.$node.offset();
  if( Math.random()*4 <= 2){
  	coord.top+=danceMove;
  	if(Math.random()*4 <= 2){
  		coord.left+=danceMove;
  	}else{coord.left-=danceMove}
  }else{
  	coord.top-=danceMove;
  	if(Math.random()*4 <= 2){
  		coord.left+=danceMove;
  	}else{
  		coord.left-=danceMove
  	}
  }
  this.$node.animate({left: coord.left,top: coord.top});


};  