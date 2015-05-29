var ImageDancer = function(top, left, timeBetweenSteps,cssClass,imgUrl,width){
  Dancer.call(this,top,left,timeBetweenSteps,cssClass);
  this.$node = $('<span class='+cssClass+' style= top:'+top+'px;left:'+left+'px; "><img src="'+imgUrl+'"/></span>');
  this.setPosition(top,left,width)

};
ImageDancer.prototype=Object.create(Dancer.prototype);
ImageDancer.prototype.constructor= ImageDancer;
ImageDancer.prototype.setPosition=function(top, left, width){
    var styleSettings = {
      top: top,
      left: left,
      width: width,
      height: width
    };
    this.$node.css(styleSettings);
  };

