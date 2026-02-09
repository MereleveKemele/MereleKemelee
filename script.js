/* kalpler */
setInterval(()=>{
  const h=document.createElement("div");
  h.innerHTML="❤️";
  h.className="heart";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
},300);


/* sayaç */
const baslangic=new Date("2022-12-23T00:00:00");

function sayac(){
  const fark=new Date()-baslangic;

  const gun=Math.floor(fark/86400000);
  const saat=Math.floor(fark/3600000)%24;
  const dk=Math.floor(fark/60000)%60;
  const sn=Math.floor(fark/1000)%60;

  const el=document.getElementById("sayac");
  if(el)
    el.innerText=`${gun} gün ${saat} saat ${dk} dakika ${sn} saniye`;
}

setInterval(sayac,1000);


/* sürpriz */
function ac(){
  document.getElementById("mesaj").style.display="block";
}

