const s2= Math.random() * 6 + 1
const s1 = Math.random() * 6 + 1

const n1 = Math.floor(s1);
const n2 = Math.floor(s2);

const d1 = document.getElementById("dice1");
const d2 = document.getElementById("dice2");
const result = document.getElementById("result")
const emoji = document.getElementById("emoji")
const header = document.getElementsByClassName("header")[0];
d1.src = `./images/dice${n1}.png`
d2.src = `./images/dice${n2}.png`

if (n1 > n2) {
    result.innerHTML = "Player 1 Win"
    
}
else if (n2 > n1){
    result.innerHTML = "Player 2 Win"
    header.style.flexDirection = "row-reverse"
}
else {
    result.innerHTML = "Draw"
    emoji.remove()

}