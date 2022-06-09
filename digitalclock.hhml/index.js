const h=document.getElementById("hours");
const m=document.getElementById("minutes");
const s=document.getElementById("second");
const am=document.getElementById("ampm")
function clock(){
let hr=new Date().getHours()
let mi=new Date().getMinutes()
let se=new Date().getSeconds()
let ampm="AM"
if(hr>12){
hr=hr-12;
ampm="PM"
}

hr=hr>10?"0"+hr:hr;
mi=mi<10?"0"+mi:mi;
se=se<10?"0"+se:se;
h.innerText=hr;
m.innerText=mi;
s.innerText=se;
am.innerText=ampm;
setTimeout(()=>{
    clock();
},1000);
}

clock()