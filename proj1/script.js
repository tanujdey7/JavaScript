var number = document.querySelector(".counter");
var followers = document.querySelector(".followers");
console.log(number.innerHTML);
let count = 1;
setInterval(() => {
    count++;
    if(count<=100) {
        number.innerHTML = count;
    }
}, 75);

setTimeout(()=>{
    followers.innerHTML = "Followers on Instagram";
},6000)