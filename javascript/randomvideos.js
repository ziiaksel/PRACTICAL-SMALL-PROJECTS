const parentIframe = document.getElementById("parent-iframe");
const buttonVid = document.getElementsByClassName("button")[0]
let i = 0
buttonVid.addEventListener("click", (eo) => {
  let list = [
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/JEi0jgrLHzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Ft_ENNy-zlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/TIbG7BZTKro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  ];



 if (i < list.length -1 ) {
  parentIframe.innerHTML = list[i]
  i++
 }
 else{
  i = 0
 }

   // parentIframe.innerHTML = list[Math.floor(Math.random() * list.length)]

});

let arrQuotes=[
  `<blockquote class="qts">“Either you run the day or the day runs you.”</blockquote>`,
  `<blockquote class="qts">“Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills. 
     Don’t wish for less challenge, wish for more wisdom.” </blockquote>`,
]
let quotes = document.getElementById("quotes-parent")
let myButton = document.getElementsByClassName("button")[1]
let x = 0
myButton.addEventListener("click",(eo) => {

  if (x < arrQuotes.length) {
    quotes.innerHTML= arrQuotes[x]
    x++
  }
  else{
    x=0
  }
  randomHeart()
})

