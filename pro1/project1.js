let date;
let time;
let a;
const opt={weekday : 'long', year : 'numeric', month : 'long', day:'numeric'};
setInterval(() => {
  a=new Date();
  time=a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
  date=a.toLocaleDateString(undefined,opt);
  document.getElementById('d').innerHTML=time+"<br> ON "+date;
}, 1000);