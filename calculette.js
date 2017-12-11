var numb = document.querySelectorAll('.numb');
var input = document.querySelectorAll('input')[0];
for (i=0; i<numb.length; i++){
numb[i].addEventListener('click', function ( event ){
        input.value = input.value + event.target.textContent;
    }, true);
}
var ope = document.querySelectorAll('.ope');
for (i=0; i<ope.length; i++){
ope[i].addEventListener('click', function ( event ){
        input.value = input.value + event.target.textContent;
    }, true);
}
var egal = document.querySelectorAll('input')[1];
egal.addEventListener('click', function ( event ){
    input.value = eval(input.value);
}, true);
var cancel = document.querySelector('.reset');
cancel.addEventListener('click', function (event) {
    input.value = "";
}, true);   





/*
numb.addEventListener('click', function (){
    var input = document.querySelector('input');
    var numb = document.querySelectorAll('.numb');
        for (i=0; i<numb.length ; i++)
        {
        numb = document.querySelectorAll('.numb')[i];
        input.value = numb.textContent;
        }
    });
*/







/*
for (i=0; i<numb.length ; i++){
numb = document.querySelectorAll('.numb')[i];
console.log(numb);
numb.addEventListener('click', print);
}


*/
/*function calcul(){
    var a = document.querySelectorAll('input')[0].value;
    var b = document.querySelectorAll('input')[1].value;
    var operator = document.querySelector('#select').options[select.selectedIndex].value;
    var result = document.querySelectorAll('input')[3];

    if (operator == "addition"){
        result.value = a+b;
    }

    if (operator == "soustraction"){
        result.value = a-b;
    }

    if (operator == "multiplication"){
        result.value = a*b;    
    }                       
                            
    if (operator == "division"){
        result.value =  a/b;
    }

}
    var submit = document.querySelectorAll('input')[2];
    submit.addEventListener('click', calcul);
*/
