function Register(name,max){
  this.name = name;
  this.max = max;
  this.val = 0;
  this.a = 0;
}

Register.prototype.set = function(val){
  this.a = parse(val);
  if(__DEBUG__)console.log(this.name + " assigned : "+val);
  if(val > this.max){
    return this.overflow();
  } else if(val < 0) {
    return this.negative();
  } else if(val == 0){
    return this.zero(); 
  }else {
    this.val = val;
  }
  return true;
}

Register.prototype.get = function(){
  return this.val;
};

Register.prototype.inc = function () {
 console.log("inc");
  return this.set(this.val+1);
}

Register.prototype.dec = function () {
  return this.set(this.val-1);
}

Register.prototype.overflow = function(){
  console.log("overFlow: "+ this.a);
};

Register.prototype.negative = function(){
  console.log("negative value: " + this.a );
};

Register.prototype.zero = function(){
  console.log("zero");
};
