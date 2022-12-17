//  toggle the light & dark mode
    {
      const dark = document.getElementById("dark");
      const body = document.getElementById("body");

      dark.addEventListener("click", (eo) => {
        body.classList.toggle("dark");
      });
    }


        /*//  when hover on  HEADER => change-color
    const hiddenul= document.getElementById("hiddenul")
    {
      changecolor.addEventListener("mousemove", (eo) => {
        hiddenul.style.display = "block";
      });
// when mouseoout hide a dropdown

      changecolor.addEventListener("mouseout", (eo) => {
        hiddenul.style.display = "none";
      });
    }*/

 //dropdown
    const changeColor = document.getElementById("changecolor")
    const hideul = document.getElementById("hiddenul")
 //show dropdown when mouse over
    changeColor.addEventListener("mouseover",(eo) => {
      hideul.style.display= "block"
    })
 //when mouse hide dropdown
    changeColor.addEventListener("mouseout",(eo) => {
      hideul.style.display="none"
    })

  //chnage the header bg
  const headerChanger = document.getElementById("headerbg")
  const header =document.getElementById("myheader")
  headerChanger.addEventListener("click",(eo) => {
    let x = Math.random() * 360;
   header.style.backgroundColor= `hsl(${x}, 100%, 50%)`
   const header1 = document.querySelector("#myheader > h1")
   header1.style.backgroundColor= `hsl(${x}, 100%, 50%)`

  })
  //CHANGE TITLES H1
  const titles = document.querySelectorAll("h1:not(#myheader > h1)")
  const titlebg = document.getElementById("titlebg")
  titlebg.addEventListener("click",(eo) => {
    titles.forEach(item => {
      let y = Math.random() * 360 ;
      item.style.backgroundColor = `hsl(${y}, 100%, 50%)`
  });
  })

  //change title color when click changetitle 

  titlecolor.addEventListener("click",(eo) => {
    const chan = () => {
      return Math.random() * 360 ;
    }
    titles.forEach(item => {
    item.style.color= `hsl(${chan()}, 100%, 50%)`

});
   
  })


  //methode 1change sectionBg when it clicked 
   /* let sectioBg = document.getElementById("sectionbg")
    let allSection = document.querySelectorAll("section")
    let colors = ["#7FDBFF","#FF851B","#DDDDDD"]
    let i=0
    sectioBg.addEventListener("click",(eo) => {
      allSection.forEach(item => {
          item.style.backgroundColor= colors[i]
     
       
      });
      // condition          if true    if false
      i<colors.length - 1 ? i++        : i = 0 

    })*/
 
    //  //methode  2 change sectionBg when it clicked 
   /* let sectioBg = document.getElementById("sectionbg")
    let allSection = document.querySelectorAll("section")
    let colors = ["#7FDBFF","#FF851B","#DDDDDD"]
    sectioBg.addEventListener("click",(eo) => {
      allSection.forEach(item => {
        let radnom = Math.floor(Math.random() * colors.length  )
          item.style.backgroundColor= colors[radnom]
       
      });
    })*/
    
      //change section when it clicked with hexadicimal using for 
     /* let sectioBg = document.getElementById("sectionbg")
      let allSection = document.querySelectorAll("section")
   const hexa  = (eo) => {
   return `#${Math.random().toString(16).slice(2,8)}`
   }
 
      sectioBg.addEventListener("click",(eo) => {
        let hex = hexa()
       for (let i = 0; i < allSection.length; ) {
        const item = allSection[i];
        item.style.backgroundColor= hex
        i++
       }
       
      })
  */
 //change section  for in 
     let sectioBg = document.getElementById("sectionbg")
      let allSection = document.querySelectorAll("section")
      const hexa  = (eo) => {
        return `#${Math.random().toString(16).slice(2,8)}`
        }
      sectioBg.addEventListener("click",(eo) => {
        let hex = hexa()
        let i = 0 
        for (;;){
          if (i < allSection.length) {
            const item = allSection[i]
            item.style.backgroundColor= hex
            i++
          }
         else{break}
        }
      })
      /*
      let sectioBg = document.getElementById("sectionbg")
      let allSection = document.querySelectorAll("section")
      const hexa  = (eo) => {
        return `#${Math.random().toString(16).slice(2,8)}`
        }
        let hex = hexa()
      sectioBg.addEventListener("click",(eo) => {
        let i = 0
       
       do {
        const item= allSection[i]
        item.style.backgroundColor= hex
        i++

       } while (i < allSection.length );
      })*/

let headerProfile = document.getElementById("header")
const title = "My Profile"
let counter = 1
  const autoWriting = () => {
   
    headerProfile.innerText = title.slice(0, counter)
    counter++
    if ((counter>title.length)) {
      
     clearInterval(stop)
    }
 
    
  }
  const stop =  setInterval( autoWriting,300)
  





