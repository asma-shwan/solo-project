let divEl=document.getElementById("div-el")

function ganaration(){
let password=[]
let inputEl=document.getElementById("input-el")
let x=inputEl.value
for(let i=0;i<x;i++){
let ints=32+(Math.floor(Math.random()*93)+1)
let chars=String.fromCharCode(ints)
password.push(chars)
}
divEl.textContent=password.join('')
}
