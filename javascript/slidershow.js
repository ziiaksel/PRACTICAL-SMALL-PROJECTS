const arrImg = [
  `<img class="image-slider" src="/level 3 project 1/img/blossoms-g2619b5e36_1920.jpg">`,
  `<img class="image-slider"  src="/level 3 project 1/img/pendulum-g57592f983_1920.jpg" >`,
  `<img class="image-slider" src="/level 3 project 1/img/stellers-sea-eagle-gf4271e766_1920.jpg" ></img> `,
];
//calling elements
const slideContainer = document.getElementById("slide-container");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const arrNumber = document.querySelectorAll(".num");
const parentNumbers = document.getElementById("num-cont");
const btn1 = document.getElementsByClassName("num")[0]
btn1.classList.add("active-num")
let indexImg = 0;
let num = 0;
//disable previous incial page
previous.setAttribute("disabled", "");

//inner images
slideContainer.innerHTML += arrImg[0];
//inner text slide 1 of 3
slideContainer.innerHTML += `    <p class="img-txt">slide #${num + 1} of ${
  arrImg.length
} </p>`;





//able previous and change images by ++index when click next
next.addEventListener("click", (eo) => {
  previous.removeAttribute("disabled");

  indexImg++;

  slideContainer.innerHTML += arrImg[indexImg];
  slideContainer.innerHTML += `<p class="img-txt">slide #${indexImg + 1}of ${
    arrImg.length} </p>`;
    parentNumbers.querySelectorAll(".active-num")[0].classList.remove("active-num");
    parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num");


  //disable next if hit last image --index
  if (indexImg + 1 == arrImg.length) {
    next.setAttribute("disabled", "");
  }
});




// decreament when previos clicked
previous.addEventListener("click", (eo) => {
  indexImg--;
  slideContainer.innerHTML += arrImg[indexImg];
  slideContainer.innerHTML += `<p class="img-txt">slide #${indexImg + 1}of ${
    arrImg.length
  } </p>`;
  if (indexImg == 0) {
    previous.setAttribute("disabled", "");
    next.removeAttribute("disabled");
  }
  parentNumbers.querySelectorAll(".active-num")[0].classList.remove("active-num");
  parentNumbers.getElementsByTagName("button")[indexImg].classList.add("active-num");
});

//make numbers clickable and change their css statu


arrNumber.forEach((item,index) => {
  item.addEventListener("click", (eo) => {
    parentNumbers.querySelectorAll(".active-num")[0].classList.remove("active-num");
    item.classList.add("active-num");
    slideContainer.innerHTML += arrImg[index];
    slideContainer.innerHTML += `    <p class="img-txt">slide #${index+1} of ${
      arrImg.length
    } </p>`;

    indexImg = index
   



    //if btn number clicked show previos
    if (index > 0) {
  
      previous.removeAttribute("disabled");
    }
    else{
      previous.setAttribute("disabled","");
    }

    
//if btn number is last numb disable next
  if (index ==2) {
    next.setAttribute("disabled","")
  }
  else{
    next.removeAttribute("disabled")
  }


  });
});
