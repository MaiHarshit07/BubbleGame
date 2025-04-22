var itm = " ";
let timer= 10;
let scr = 0;
let rand =0;

function bubbleSet(){
for (var i = 1; i <= 180; i++) {

   let randm = Math.floor(Math.random() * 10);
  itm += `<div class="cnum"> ${randm} </div>`;
}
document.querySelector("#pbotm").innerHTML = itm;
}

function setTime(){
let intervalID=setInterval( () => {
  if(timer>0) {
    timer--;
    document.querySelector("#timer").textContent=timer;
  } else {
    clearInterval(intervalID);
    document.querySelector("#pbotm").innerText=`game over!`
    document.querySelector("#pbotm").style.cssText="margin-top:20%; justify-content: center; font-size:40px; font-weight:600"
    }
  }, 1000);
}
function getHit() {
    rand = Math.floor(Math.random() * 10);
    document.querySelector("#Hit").textContent= rand;
}
function scoreUpdate(){
   scr+=10;
   document.querySelector("#scre").textContent=scr;
}

function bubbleClick(){
      let bubl_clk=document.querySelector("#pbotm");
        bubl_clk.addEventListener("click", function(details){
          // this is the concept of event bubbling jab bahut jade elements hai to kitne par lagaoge event listner to uske parent p lagatey hai jab use child p nahi milta hai listner to parent p khojta hai uspe bhi nahi to parent ke parent parkhojega

       if( Number(details.target.textContent) === rand ){
        getHit();
        bubbleSet();
        scoreUpdate();
       }
        }
      )
}
    bubbleSet();
    getHit();
    setTime();
    bubbleClick();

  