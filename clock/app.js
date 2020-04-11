setInterval(setClock,1000);
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");
function setClock(){
    const newDate=new Date;
    const sR=newDate.getSeconds()/60;
    const mR=(sR+newDate.getMinutes())/60;
    const hR=(mR+newDate.getHours())/12;
    setRotation(hours,hR)
    setRotation(minutes,mR)
    setRotation(seconds,sR)
}
function setRotation(element,rR){
    element.style.setProperty('--r', rR*360)
}
setClock()