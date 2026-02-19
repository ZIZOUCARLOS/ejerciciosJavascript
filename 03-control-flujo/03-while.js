// while El while es una estructura que sirve para repetir algo varias veces, y se lee igual que el if: como una pregunta. El programa se pregunta “¿esto sigue siendo verdad?” y mientras la respuesta sea “sí”, vuelve a ejecutar el código una y otra vez; cuando la respuesta pasa a ser “no”, se detiene. Por ejemplo, se usa cuando no sabes exactamente cuántas veces repetir algo, como seguir mostrando un mensaje mientras un número no llegue a cierto valor

// cuales son los numeros pares
// si la condicion se cumple entonces se ejecuta el codigo dentro del ()
// while(condicion){}
// la codicion siempre debe de estar fuera del if porque si no se entra en u n lop infinito en este casao el i++
// En JavaScript, el % no significa “porcentaje”, significa módulo, y lo que hace es devolver el residuo (lo que sobra) de una división.


let i = 0;
while(i < 10){
    if(i % 2 == 0){
        console.log('numero par', i );
        
    }
    //console.log(i)
    i++
}
console.log('fuera del while')
