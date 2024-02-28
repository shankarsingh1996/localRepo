let btn=document.querySelector("#btn1");

btn.addEventListener("click", (e)=>{
    console.log("button first was clicked- handler");
    console.log(e);
    console.log(e.type);
})

btn.addEventListener("click", ()=>{
    console.log("button first was clicked -handler2");
})

let handlera3 = () =>{
    console.log("button first was clicked -handler3");
}
btn.addEventListener("click",handlera3);

btn.addEventListener("click", ()=>{
    console.log("button first was clicked -handler4");
})

btn.removeEventListener("click",handlera3);




