

let blackjack = false
let isAlive = false
let sum = 0;
let allCards = [];
display = document.getElementById("new");
displaySum = document.querySelector("#sum")
cards = document.getElementById("cards")
let started = false

let player = {
    name: "Bob",
    chips: 100
}
let playerDetails = document.getElementById("player")
playerDetails.innerHTML = player.name + ": $" + player.chips

function randomNumber(){
    let num = Math.ceil(Math.random()*10+ 1)
    return num;
}

function startGame(){
    let card1 = randomNumber();
    let card2 = randomNumber();
    allCards = [card1, card2];
    sum = card1 + card2;
    started = true;
    renderGame();
}

function renderGame(){
    cards.innerHTML = "Your Cards: ";
    for(let i = 0; i < allCards.length; i++){
        cards.innerHTML += allCards[i] + " ";
        }

displaySum.innerHTML = "Sum: " + sum

let msg = ""
if(sum<21){
    msg = "Do you want to draw another card ?"
    isAlive = true
} 
else if(sum === 21){
    msg = "Black-Jackpot"
    blackjack = true
} 
else if(sum > 21){
    msg = "You've lost the game."
}   

display.innerHTML = msg
} 

function newCard(){
    if(started == true && sum <= 21){
        let cardn = randomNumber();
        sum += cardn;
        allCards.push(cardn)
        renderGame()
    }
    else if(started == false){
        display.innerHTML = "Start the game first !"
    }
    else{
        display.innerHTML = "Can't Draw More Cards!"
    }
}