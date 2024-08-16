let slider= document.getElementById("slider-inner");


let index=0;
let img = document.querySelectorAll("#slider-inner img");
console.log(img.length)

setInterval(function(){
  let percentage = index*-100;
  slider.style.transform="translateX("+ percentage+"%)";
  index++;
  if(index>img.length-1){
    index=0;
  }
},1000)
