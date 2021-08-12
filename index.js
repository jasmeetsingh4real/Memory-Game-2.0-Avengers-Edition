const cards = document.querySelectorAll(".card");

const Timer = document.querySelector(".timer")

const btn = document.querySelector(".start");

// const reload = document.querySelector(".reload")
// console.log(cards)
var counter = 0;

var firstCardFlipped = false;

var firstCard;

var secoundCard;

var isStarted = false;




var time = 0;

const startTimer=()=>{
    if(!isStarted){
        isStarted = true;
        btn.innerHTML="Started!";
        btn.removeEventListener("click",startTimer)
        cards.forEach((card)=>{card.addEventListener("click",flip)})
          
        setInterval(() => {
        time++;
        Timer.innerHTML= ("Timer: "+time)
             
        }, 1000);
    }
}

btn.addEventListener("click",startTimer)




function flip(){
    // console.log("card flipped")
 this.classList.add("flip")
  if(!firstCardFlipped){
    firstCardFlipped = true;
    firstCard = this;
  }else{
      secondCard = this;
      check();
  }
    
} 
function check(){
    if(firstCard.dataset.image === secondCard.dataset.image){
        success()
    }else{
        fail()
    }

}
function success(){
    // console.log("Success")
    counter++;
    setTimeout(() => {
        if(counter === 8){
        alert("Your Score is: "+time +" seconds")
        window.location.reload();
        counter = 0;
            }
    }, 300);
   
    firstCard.removeEventListener("click",flip)
    secondCard.removeEventListener("click",flip)
    reset();
}
function fail(){
    // console.log("fail");
    setTimeout(()=>{
    firstCard.classList.remove("flip")
    secondCard.classList.remove("flip")
    reset();
    },300)
   
}

function reset(){
    firstCardFlipped = false;
    firstCard = null;
    secoundCard = null;
    isStarted = false;
}


(function suffle(){
    cards.forEach((card)=>{
        var index = Math.floor(Math.random()*16);
        card.style.order = index 
      })
})();





