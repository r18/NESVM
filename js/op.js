function OP(reg,mem) {
  this.reg = reg;
  this.mem = mem;
  this.addrMode = "";
}

OP.prototype = {

  INX : function (args) {
    if(this.addrMode != "Implied")return Error("INX must be called with Implied Mode");
    this.reg.X.inc();
  },

  INY : function (args) {
    if(this.addrMode != "Implied")return Error("INY must be called with Implied Mode");
    this.reg.Y.inc();
  },

  TAX: function (args) {
    if(this.addrMode != "Implied")return Error("TAX must be called with Implied Mode");
    this.reg.X.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },

  TAY: function (args) {
    if(this.addrMode != "Implied")return Error("TAY must be called with Implied Mode");
    this.reg.Y.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },
  TYA: function (args) {
    if(this.addrMode != "Implied")return Error("TYA must be called with Implied Mode");
    this.reg.Y.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },
  TXS: function (args) {
    if(this.addrMode != "Implied")return Error("TXS must be called with Implied Mode");
    this.reg.Y.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },
  TXA: function (args) {
    if(this.addrMode != "Implied")return Error("TXA must be called with Implied Mode");
    this.reg.Y.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },
  TSX: function (args) {
    if(this.addrMode != "Implied")return Error("TSX must be called with Implied Mode");
    this.reg.Y.set(this.reg.A.get()); 
    this.reg.PC.inc();
  },

  LDA: function (args) {
    switch(this.addrMode){
      case "Immediate":
        this.reg.A.set(parse(args[1]));
       break;
      case "ZeroPage":
        this.reg.A.set(this.mem.get(args[1]));
       break;
      case "ZeroPageX":
        this.reg.A.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "ZeroPageY":
        this.reg.A.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      case "Absolute":
        this.reg.A.set(this.mem.get(args[1]));
       break;
      case "AbsoluteX":
        this.reg.A.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "AbsoluteY":
        this.reg.A.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      case "IndexIndirectX":
       break;
      case "IndirectIndexY":
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },

  LDX: function (args) {
    switch(this.addrMode){
      case "Immediate":
        this.reg.X.set(parse(args[1]));
       break;
      case "ZeroPage":
        this.reg.X.set(this.mem.get(args[1]));
       break;
      case "ZeroPageX":
        this.reg.X.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "ZeroPageY":
        this.reg.X.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      case "Absolute":
        this.reg.X.set(this.mem.get(args[1]));
       break;
      case "AbsoluteX":
        this.reg.X.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "AbsoluteY":
        this.reg.X.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },

  LDY: function (args) {
    switch(this.addrMode){
      case "Immediate":
        this.reg.Y.set(parse(args[1]));
       break;
      case "ZeroPage":
        this.reg.Y.set(this.mem.get(args[1]));
       break;
      case "ZeroPageX":
        this.reg.Y.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "ZeroPageY":
        this.reg.Y.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      case "Absolute":
        this.reg.Y.set(this.mem.get(args[1]));
       break;
      case "AbsoluteX":
        this.reg.Y.set(this.mem.get(parse(args[1])+parse(this.reg.X.get())));
       break;
      case "AbsoluteY":
        this.reg.Y.set(this.mem.get(parse(args[1])+parse(this.reg.Y.get())));
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },

  STA: function (args) {
    switch(this.addrMode){
      case "ZeroPage":
        this.mem.set(args[1],this.reg.A.get());
       break;
      case "ZeroPageX":
        this.mem.set(parse(args[1])+parse(this.reg.X.get()),this.reg.A.get());
       break;
      case "ZeroPageY":
        this.mem.set(parse(args[1])+parse(this.reg.Y.get()),this.reg.A.get());
       break;
      case "Absolute":
        this.mem.set(args[1],this.reg.A.get());
       break;
      case "AbsoluteX":
        this.mem.set(parse(args[1])+parse(this.reg.X.get()),this.reg.A.get());
       break;
      case "AbsoluteY":
        this.mem.set(parse(args[1])+parse(this.reg.Y.get()),this.reg.A.get());
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },
  STX: function (args) {
    switch(this.addrMode){
      case "ZeroPage":
        this.mem.set(args[1],this.reg.X.get());
       break;
      case "ZeroPageY":
        this.mem.set(parse(args[1])+parse(this.reg.Y.get()),this.reg.X.get());
       break;
      case "Absolute":
        this.mem.set(args[1],this.reg.X.get());
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },

  STY: function (args) {
    switch(this.addrMode){
      case "ZeroPage":
        this.mem.set(args[1],this.reg.Y.get());
       break;
      case "ZeroPageX":
        this.mem.set(parse(args[1])+parse(this.reg.X.get()),this.reg.Y.get());
       break;
      case "Absolute":
        this.mem.set(args[1],this.reg.Y.get());
       break;
      default : 
       Error("No addr Mode: "+args );
       break;
    }
  },
  NOP:function(args){
    if(args.length > 1)console.log("Error: Nop has no args"); 
    if(__DEBUG__)console.log("NOP");
    this.reg.PC.inc();
  },

  BRK:function(args){
    if(args.length > 1)console.log("Error: Nop has no args"); 
    if(__DEBUG__)console.log("NOP");
    this.reg.PC.inc();
  },

  argCheck:function (args) {
    var res = this.getAddrMode(args);
    if(!res && __DEBUG__){
      console.log("*********** error log : "+args + " , Mode : " + res);
      return false;
    }
    this.addrMode = res;
    if(__DEBUG__)console.log("Addr mode : "+res);
    return res;
  },

  getAddrMode:function(args){
    if(args.length == 1){
      return "Implied";
    }

    var a = args[1];
    if(args.length == 2){
      if(a[0] == '#'){
        /* Immediate Data */
        if(a.length == 3){
          return "Immediate";
        } else if(a.length == 4 && a[1] == "$"){
          return "Immediate";
        }
      } else if(a[0] == 'A'){
        return "Accumulator";
      }else if(a[0] == "$"){
        return "Absolute";
      } else if (a[0] == "<"){
        return "ZeroPage";
      } else {
        return "Relative";
      }
    }
    var b = args[2];
    if(args.length == 3){

      if(a[0] == '[' && a[4] == ']'){
        if(b[0] == "X")return "IndexIndirectX";
        if(b[0] == "Y")return "IndexIndirectY";
        return false;

      } else if(a[0] == '[' && b[1] == ']'){
        if(b[0] == "X")return "IndirectIndexX";
        if(b[0] == "Y")return "IndirectIndexY";
        return false;
      }
      if(a[0] == "$"){
        if(b[0] == "X")return "AbsoluteX";
        if(b[0] == "Y")return "AbsoluteY";
      } else if (a[0] == "<"){
        if(b[0] == "X")return "ZeroPageX";
        if(b[0] == "Y")return "ZeroPageY";

      }
    }
    if(args.length > 3){
      if(__DEBUG__)console.log("Error: args too mach");
      return false;
    }
  }
};
