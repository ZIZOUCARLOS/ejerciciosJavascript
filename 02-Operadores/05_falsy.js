// short circuit

// el código deja de evaluar condiciones apenas ya sabe el resultado.

// false : Falso,o '' null, undefined, nan

// Recuerda que el OR || evalua siempre el true siempre y cuando los valores de la varible ambas sean false 

let nombre = 'Carlos';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Soy funcioin 1')
    return false ; 
}
function fn2(){
    console.log('Soy funcioin 2')
    return true ; 
}

let x = fn1() && fn2(); 