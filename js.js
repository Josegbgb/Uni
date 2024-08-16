let slider= document.getElementById("slider-inner");
let img= document.querySelectorAll("#slider-inner img");
let index=0;

setInterval(function(){
    let percentage = index*-100;
    slider.style.transform="translateX("+ percentage+"%)";
    index++;
    if(index>img.length-1){
        index=0;
      }
},3000)