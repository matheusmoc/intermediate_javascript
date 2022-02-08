prompt("what is your name?")
prompt("what is their name?")

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore); 


if(loveScore >= 80 && loveScore <= 90 ){
    console.log("Your love score is "+loveScore+"%" + " Wow!!! You're a lucky person")
} 

if(loveScore > 90){
    console.log("Your love score is "+loveScore+"%" + " Congratulations!! You found your love")
}

else{
    alert("Your love score is "+loveScore+"%");
}

 



