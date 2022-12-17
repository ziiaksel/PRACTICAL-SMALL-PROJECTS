//when finland clicked it remove active from other country and add class activr to it 

const CountriesButton = document.querySelectorAll(".button-contry")
const contriesTabs = document.getElementById("all-contries-tabs")
const allContent = document.querySelectorAll(".togle-content-container")[0]
CountriesButton.forEach((item ,index) => {
    item.addEventListener("click",(eo) => {
        contriesTabs.getElementsByClassName("active-country")[0].classList.remove("active-country")
      item.classList.add("active-country")
//add content to active coutry using index 
      allContent.getElementsByClassName("active-content")[0].classList.remove("active-content")
      allContent.getElementsByClassName("funfacts")[index].classList.add("active-content")
    })
});
