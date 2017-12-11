
function calcul(){
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