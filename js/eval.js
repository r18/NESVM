function _EVAL(reg,mem) {
  console.log("evaluater init");
  this.ops = new OP(reg,mem);

}

_EVAL.prototype = {
  eval:function (line) {
    var res = line.split(' ');
    if(__DEBUG__)console.log(res);
    if(res.length > 3)console.log("Arguments Error: over 2 arg " + res);
    if(res.length < 1)console.log("Arguments Error: " + res);
    try{
      this.ops.argCheck(res);
      this.ops[res[0]](res); 
    } catch (e){
      console.log(e);
    }
  }


};


  function parse(arg) {
    if(arg[0] == '<'){
      arg = arg.substring(1);
    }
    if(arg[0] == '#'){
      arg = arg.substring(1);
    }
    if(arg[0] == '$'){
      arg = parseInt(arg.substring(1),16);
    } else {
      arg = parseInt(arg);
    }
    return arg;
  }
