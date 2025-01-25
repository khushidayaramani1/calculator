let calc=document.querySelector('#calc');
let zero=document.querySelector('#zero');
let one=document.querySelector('#one');
let two=document.querySelector('#two');
let three=document.querySelector('#three');
let four=document.querySelector('#four');
let five=document.querySelector('#five');
let six=document.querySelector('#six');
let seven=document.querySelector('#seven');
let eight=document.querySelector('#eight');
let nine=document.querySelector('#nine');
let clear=document.querySelector('#clear');
let bracket=document.querySelector('#bracket');
let equal_to=document.querySelector('#equal-to');
let plus=document.querySelector('#plus');
let multiply=document.querySelector('#multiply');
let minus=document.querySelector('#minus');
let divide=document.querySelector('#divide');


let elements=[zero,one,two,three,four,five,six,seven,eight,nine,plus,multiply,minus,divide]
let click_brk;
 
elements.forEach((elem)=>{
    elem.addEventListener('click',()=>{
        calc.value+=elem.value;
    })
})
clear.addEventListener('click',()=>{
    calc.value=' ';
    calc.focus();
    click_brk=0;
})
click_brk=0;
bracket.addEventListener('click',()=>{
    click_brk++;
    if(click_brk%2!=0){
        calc.value+='(';
    }
    else{
        calc.value+=')';
    }
})
equal_to.addEventListener('click',()=>{
    val=calc.value 
    answer=eval(val)
    calc.value=answer;
    calc.focus();
})

 

 