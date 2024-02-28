let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light-mode";
modeBtn.addEventListener("click", () =>{
   
    if(currMode==="light-mode"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode="light-mode";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});

