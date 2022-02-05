setTimeout(function(){
  document.body.className="";
},500);

let nextButton = document.body.querySelector('.btn2')
let previousButton=document.body.querySelector('.btn1')
let lines = document.body.querySelectorAll('.line')
let circles = document.body.querySelectorAll('.circle')
console.log(circles.length)

console.log(circles[3])

nextButton.addEventListener("click", function(){
  console.log('working')
for(i=0;i<circles.length-1;i++){
  if (lines[i].classList.contains("active")===false ){
    nextButton.style.pointerEvents='auto';
    circles[i+1].classList.add('active');
    lines[i].classList.add('active')
    break
  } 

}
if(lines[2].classList.contains("active")){

  nextButton.innerText='Finished'

}

})

previousButton.addEventListener("click", function(){
  for(i=circles.length-1;i>=0;i--){
    if (circles[i].classList.contains("active")){
      circles[i].classList.remove('active');
      lines[i-1].classList.remove('active')
      nextButton.innerText='Next'
      break
    }
  }

  
  })

