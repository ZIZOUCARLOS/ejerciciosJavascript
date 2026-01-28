//Parametros son las variables que se definen en la función. Funcionan como “espacios” donde la función espera recibir datos

function suma (a, b ){
    console.log(arguments);
    return a + b ; 
}
//Argumentos Son los valores reales que le pasás a la función cuando la llamás

 let resultado = suma(5, 6, 7 , 8 , 9 ); 
 console.log(resultado)
 console.log(typeof suma)

 // argument se utiliza para ver todas los valores que tienen los parametros de la function 

 function resta ( y ,o , u ){
    return y + o + u ; 
 }

 let resulatdos_de_parametros = resta(3, 3, 3)
 console.log(resulatdos_de_parametros); 

 function pesicola (m,n,z){
    return m + n 
 }
 let re = pesicola( 10, 10)
 console.log(re)
 
 function multiplica(z, y){
   return z * y 
 } 

 let reusltado_multiplicacion =  multiplica (5 * 5)
console.log(typeof multiplica)
