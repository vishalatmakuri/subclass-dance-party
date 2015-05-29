// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps,cssClass){
  this.$node = $('<span class="'+cssClass+'"></span>');
  this._timeBetweenSteps= timeBetweenSteps;

  this.setPosition(top,left);
  this.danceStepControl=true;
  this.step();

};

Dancer.prototype.step=function(){
  if(this.danceStepControl){
    setTimeout(this.step.bind(this), this._timeBetweenSteps);
  }
};

Dancer.prototype.setPosition=function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUpLeft=function(){
    var styleSettings ={
      left: '5px'
    };

    this.$node.css(styleSettings);
    this.danceStepControl=false;
  };

