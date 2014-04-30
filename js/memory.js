function MEM() {
  this.mem = new Uint8Array(2*16);
}

MEM.prototype = {
  set: function (addr,value) {
    value = this.parse(value);
    addr = this.parse(addr);
    return this.mem[addr] = value; 
  },

  get : function (addr) {
    addr = this.parse(addr);
    return this.mem[addr]; 
  },
  parse:function (arg) {
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


};
