

const images = document.querySelectorAll(".drag-pic");

console.log(images);

images.forEach(e =>{

    e.addEventListener("mouseover",()=>{
       e.style.transform = "scale(1.2)";
        e.style.transition = "all 0.5s";
        e.style.borderRadius = "20%";
        e.style.opacity = "0.5";
        
    });

    e.addEventListener("mouseleave",()=>{
      e.style.transform = "scale(1.0)";
    e.style.transition = "all 0.5s";
       e.style.borderRadius = "0";
       e.style.opacity = "1";
        
    });

    
    e.addEventListener("click",(e)=>{
    
   
    e.target.src = "img/fun-bus.jpg";
    e.stopPropagation();
    });
});




window.addEventListener("resize", () =>{
    images[0].src = "img/adventure.jpg";
});

const body = document.querySelector("body");

body.addEventListener("keydown", (e) =>{
    body.style.color = "red";
});


body.addEventListener("keyup", (e) =>{
    body.style.color = "black";
});

window.addEventListener("scroll", () =>{
 body.style.color = "blue";
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(element =>{
element.addEventListener("focus",(e)=>{
    element.style.color = "blue";
    
})
}
);

navLinks.forEach(element =>{
 element.addEventListener("click",(e)=>{
     e.preventDefault();
 });
})

navLinks.forEach(element =>{
    element.addEventListener("blur",(e)=>{
        element.style.color = "black";
    })
    }
    );
const logo = document.querySelector(".logo");
   TweenLite.to(navLinks[1], 1, {fontSize:30});
   

 
   

    