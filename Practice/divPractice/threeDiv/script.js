let divs=document.querySelectorAll(".box");
// console.dir(divs);
// console.log(divs);

let idx=1;
for(div of divs){
    //console.log(div.innerText);
    div.innerText=`this div no is ${idx}`;  /* using a back tag (``) */
    idx++;
}

/*
divs[0].innerText="This is a First div bhole";
divs[1].innerText="This is a Second Div";
divs[2].innerText="This is a Third Div Mahadeva";
*/