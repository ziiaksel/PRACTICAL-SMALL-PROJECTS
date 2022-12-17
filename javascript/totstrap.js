//  toggle the light & dark mode
{
    const dark = document.getElementById("dark");
    const body = document.getElementById("body");

    dark.addEventListener("click", (eo) => {
      body.classList.toggle("dark");
    });
  }

  //tootstrap
  
  //copie btn
  const copieBtn = document.querySelectorAll(".copie")
  const arrPre = document.querySelectorAll(".line-numbers")[0]


  copieBtn.forEach(item => {
    item.addEventListener("click",(eo) => {
   
      navigator.clipboard.writeText(item.nextElementSibling.innerText);
      item.innerText= "copied"
setTimeout(() => {
  item.innerText="copie"
}, 800);
    })
    
  });
