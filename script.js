// 29/1/24 
// stop watch 
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let milli = document.getElementById("millisec");
  // let inst;
  let m = 0;
  let s = 0;
  let ms = 0
  ms = 0;
  m = checkTime(m);
  s = checkTime(s);


document.getElementById("start").addEventListener("click",()=>{
  inst = setInterval(() => {
  ms++;
  milli.innerHTML = checkTime(ms);
  if(ms>=99){
    s++;
    ms = 0;
    sec.innerHTML = checkTime(s);
  }
  if(s>=99){
    m++;
    s= 0;
  }
},10);
});
document.getElementById("stop").addEventListener("click",()=>{
  clearInterval(inst);
});
document.getElementById("reset").addEventListener("click",()=>{
  ms = "00";
  s = "00";
  m = "00";
  min.innerHTML = m;
  sec.innerHTML = s;
  milli.innerHTML = ms;
  clearInterval(inst);
});


function checkTime(i){
  if (i < 10) {i = "0" + i};  
  return i;
}




        


