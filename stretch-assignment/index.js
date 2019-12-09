const blocks = document.querySelectorAll(".block");

console.log(blocks);

blocks.forEach(element =>{
    

    element.addEventListener("mousedown",(e)=>{
        TweenLite.to(element, 0.5, {x:1000});
    });

    element.addEventListener("mouseup",()=>{
        TweenLite.to(element, 0.3, {x:-45});
    })
})





