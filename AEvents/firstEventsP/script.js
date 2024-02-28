let buttonfirst=document.querySelector("#btn1");


buttonfirst.ondblclick=()=> {
    console.log("btn was cliked on two times");
   let a=23;
    a++;
};

let  btnsec=document.querySelector("#btn2");
btnsec.onclick=(e)=> {
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
  console.log("you gone through the button ");
}


let box=document.querySelector("div");

box.onmouseover=()=> {
    console.log("you are under the box");
};