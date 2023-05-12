const hours=document.getElementById("hours")
const minutes=document.getElementById("Mintes")
const seconds=document.getElementById("Seconds")
const ampm=document.getElementById("ampm")

function updataclock()
{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm= "AM"

    if(h>12)
   {
    h=h-12;
    ampm ="PM"
   }
   h=h<10? "0"+h:h;
   m=m<10? "0"+m:m;
   s=s<10? "0"+s:s;
    hours.innerHTML =h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    ampm.innerHTML =ampm;
   setTimeout(() => {
    updataclock()
   }, 1000);   
}
updataclock()