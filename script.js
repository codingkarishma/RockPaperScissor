let message=document.querySelector(".message");
console.log(message);
let rock=document.querySelector("#rocks");
console.log(rock);
let paper=document.querySelector("#paper");
console.log(paper);
let scissor=document.querySelector("#scissors");
console.log(scissor);
let cap=document.querySelectorAll(".caption");
console.log(cap);
let icons=document.querySelectorAll(".options .fa-regular");
console.log(icons);
let fists=document.querySelectorAll(".fists .fa-regular");
console.log(fists);
let options=document.querySelector(".options");
console.log(options); 

let myFist=document.querySelector("#playerfist");
console.log(myFist);

let compFist=document.querySelector("#compfist");
console.log(compFist)
let count=0;
let mycount=0;
let compcount=0;
cap.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
    item.style.color="rgb(225, 24, 64)";
    item.style.fontWeight="600";
});
    item.addEventListener("mouseleave",()=>{
        item.style.color="rgb(232, 123, 123)";
        item.style.fontWeight="400";
    })
})
console.log(icons[2]);
// Mapping for computer choices
function getComputerChoice() {
    let randoNum = Math.floor(Math.random()*3);
    console.log(randoNum);
    let choices = ["fa-hand-back-fist", "fa-hand", "fa-hand-scissors"]; // Rock, Paper, Scissors icons
    console.log(choices[randoNum]);
    return choices[randoNum];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
    console.log("Computer coice",computerChoice);
    console.log("player choice",playerChoice);
    if (playerChoice === computerChoice) {
        message.innerText= "It's a draw!";
        console.log("tie")
    } else if (
        (playerChoice === "fa-hand-back-fist" && computerChoice === "fa-hand-scissors") ||
        (playerChoice === "fa-hand" && computerChoice === "fa-hand-back-fist") ||
        (playerChoice === "fa-hand-scissors" && computerChoice === "fa-hand")
    ) {
        mycount++;
        message.innerText="You win!";
        console.log("mee")
    } else {
        compcount++;
        message.innerText="Computer wins!";
        console.log("ai");
    }
}

// Add click event to each icon
icons.forEach((item)=>{
    item.addEventListener("mouseover",()=>{
    item.style.color="purple";
    item.style.fontWeight="600";
    item.style.transition="0.2 smooth";
    item.style.scale="1.2";
    });
    item.addEventListener("mouseleave",()=>{
        item.style.color="#b85988";
        item.style.fontWeight="400";
        item.style.scale="1";
    });
    item.addEventListener("click",()=>{
        generateFists(item);
        count++;
        console.log(count);

        counter.style.display="flex";
        myCountdisplay.innerHTML=`My Score ${mycount}`;
        cpuCountDisplay.innerHTML=`Comp's Score ${compcount}`;
    });
});

function generateFists(item){
        let computerChoice=getComputerChoice();
        console.log(computerChoice);
        compFist.innerHTML="";
       compFist.setAttribute("class",`fa-regular ${computerChoice}`)
        
        console.log(compFist);
        

       let arr=[...item.classList];
       let playerChoice=arr[1];
       console.log(arr);
       console.log(playerChoice);
       myFist.innerHTML="";
       myFist.setAttribute("class",`fa-regular ${playerChoice}`);
       console.log(myFist);

      determineWinner(playerChoice,computerChoice);

    if(computerChoice ==="fa-hand-scissors" || playerChoice==="fa-hand-scissors"){
        myFist.style.transform="rotate(90deg)";
        compFist.style.transform="rotate(-90deg)";
    }
}

let counter=document.querySelector(".counter");
console.log(counter);

let myCountdisplay=document.querySelector(".mycount");
console.log(myCountdisplay);

let cpuCountDisplay=document.querySelector(".compCount");
console.log(cpuCountDisplay);




