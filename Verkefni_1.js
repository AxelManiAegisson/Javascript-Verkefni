/*Javascrip verkefni 1*/

/*1
/*Null er þegar gefið er breytu null en undefined er þegar þag er ekki gefið vreytu neitt.

#2
/*"Use strict" keyrir kóða í strict mode. Í strict mode þá keyrir það ekki breytu sem eru fyrir neðan "use strict"

#3
var er gamla leiðinn til að gera breytur og var með nokkra galla í henni t.d. ekkert block scoping og hoisting tekur bara breytuna ekki innihaldið, let er block scoped er ekki hoistað, const er 
eiginlega alveg eins og let en er: read-only og það er ekki hægt að endurskrifa eða að láta einhvað annað í það ef það er búið að láta í hana

#4*/

let numbers = [1,2,3,4,5,6,7,8,9];
let x;
for (x = 0; x< numbers.length; x++) {
 console.log("hello " + (x+1));
}


/*#5*/
function cat(){
	let pet = "cat";
	let petMsg = "meow";
}
let cat = function(){
	let petMsg = "meow";
}
let add = (pet)=> "meow"; 

/*#6
Kóðinn gerir pop-up í glugganum sem segir: "Hello World". Svigarnir groupa og halda inni expressionin og kalla á functionið.

#7
Kóðinn birtir 1 útaf let
"use strict";
let a = 1;
function b() {
	 a = 10;
	 return;
	 function a() {}
}
b();
console.log(a);