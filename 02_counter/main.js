let count=0;
// function plus(){
//     count++;
//     document.getElementById("result").innerText=count;
// }
// const resultH1=document.getElementsByTagName("h1")[0];
// const plusButton=document.getElementsByTagName("button");
// const resltH1=document.querySelectorAll("h1")[0];
// const plusButton=document.querySelectorAll("button");
// const resultH1=document.querySelector("h1");
// const plusButton=document.querySelector("button");
const resultH1=document.getElementById("result");
// const resultH1=document.querySelector("#result");
// const plusButton=document.getElementById("plusButton");
// const plusButton=document.querySelector("plusButton");
// plusButton.addEventListener("click", plus);
// function plus(){
//     count++;
//     // count+=1;
//     // count+=count+1;
//     resultH1.innerHTMl=count;
// }
// plusButton.addEventListener("click", ()=> {
//     count++;
//     resultH1.innerHTMl=count;
// });
// plusButton.onclick=()=>{
//     count++;
//     resultH1.innerHTMl=count;
// }
// const plus=()=>{
//     count++;
//     resultH1.innerHTML=count;
// }
resultH1.innerHTML=count;
function plus(){
    count++;
    resultH1.innerHTML=count;
}
function plusTwo(){
    count+=2;
    resultH1.innerHTML=count;
}
function minus(){
    count--;
    resultH1.innerHTML=count;
}