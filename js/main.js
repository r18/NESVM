
__DEBUG__ = true;

function main() {
  console.log("run");
  NESVM = new VM();
  CONSOLE = document.getElementById('prompt');
  document.getElementById('step').onclick = function () {NESVM.step();}
  document.getElementById('eval').onclick= function(){NESVM.eval(CONSOLE.value)};

}
