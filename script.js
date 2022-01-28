var counter = document.querySelector(".counter");
var followers = document.querySelector(".follower");

let count=1;

setInterval(()=>{
if(count<5000){
    count++;
    counter.innerText = count;
}
},0.1)

setTimeout(()=>{
    followers.innerText ="Followers on Twitter!";
},5000)