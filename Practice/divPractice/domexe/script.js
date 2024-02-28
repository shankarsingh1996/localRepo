let newBtn=document.createElement("button");
newBtn.innerText="JavaProgram";

let button2=document.createElement("button");
button2.innerText="JavaScript";

let button3=document.createElement("button");
button3.innerText="Html";

let button4=document.createElement("button");
button4.innerText="ReactJs";

let divs=document.querySelector("div");

console.log(newBtn);
divs.append(newBtn); //adds the button in end of the  of the node (inside node)
newBtn.style.color="red";
newBtn.style.backgroundColor="yellow"

console.log(button2);
divs.prepend(button2); //adds the button in start of the  of the node  (inside node)
button2.style.color="brown";

console.log(button3); 
divs.before(button3); // adds the button in before of the  of the node  (outside node)

console.log(button4);
divs.after(button4);  // adds the button in after of the  of the node (outside node)

let heading=document.createElement("h1");
heading.innerText="Hi am beginer in js!";

let boduy=document.querySelector("body");
boduy.prepend(heading);
/* this remove any node
let para=document.querySelector("p"); 
para.remove();
*/ 