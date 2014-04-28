 
__DEBUG__ = true;
function main() {
 console.log("run");
 NESVM = new VM();
 document.getElementById('step').onclick = NESVM.step;

}
