let level=document.getElementByID("level");

let domLevel=1;

while(level.parentElement!==null){
	level=level.parentElement;
	domLevel++
}

console.log("The level of the element is: ",domLevel);