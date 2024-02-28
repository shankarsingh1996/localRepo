let newBtn=document.createElement("button");
console.log(newBtn);
newBtn.innerText="ClickMe";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
 

let budy=document.querySelector("body");
budy.prepend(newBtn);


let paragraph=document.querySelector("p");
paragraph.classList.add("newClass")