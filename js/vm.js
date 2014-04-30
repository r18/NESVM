function VM() {
  this.reg = {};
  this.reg.A = new Register("A",255);
  this.reg.X = new Register("X",255);
  this.reg.Y = new Register("Y",255);
  this.reg.S = new Register("S",255);
  this.reg.P = new Register("P",255);
  this.reg.PC = new Register("PC",65535);
  this.mem = new MEM();
  this.op = new _EVAL(this.reg,this.mem);
}

VM.prototype={

  step:function () {
    this.reg.PC.inc();
  },
  eval:function(line){
    this.op.eval(line);
  }
};
