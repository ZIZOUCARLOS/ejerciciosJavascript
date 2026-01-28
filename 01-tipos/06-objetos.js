/* Es un tipo de referencia */

//personaje de TV

let nombre = "Goku";
let anime = "Dragon ball";
let edad = 16;

let personaje = {
nombre: "Goku",
anime: "Dragon ball",
edad: 16,
// se conoce como par llave valor
// En javaScrip de conoce como propiedad y en otros lenguajes como atributoo
};
console.log(personaje)
console.log(personaje.edad)

// para ver las propiedades
console.log(personaje["nombre"])
//Otra manera de ver las propiedades en con los corchetes [] y se indica por medio de un string

// Ahora si quieres cambiar una propiedad se debe llamar a la varible 
personaje.edad = 245;

// tambien se puede utilizar la noacion de corchetes

personaje["nombre"] = "Kakaroto";

//para elminar una propiedad, se llama a la variable, nombre de la variable y propiedad...

delete personaje.anime;
console.log(personaje);

// ejercicios

let PersonajesDragonBall = {
    nombres: "GOKU, VEGUETA, GOJHAN",
    poderes: "Kamekameja, Resplandor Final, Matenco",
    edades: [44,50,12,]
}
console.log(PersonajesDragonBall)
console.log(PersonajesDragonBall.poderes)
console.log(PersonajesDragonBall["nombres"])
PersonajesDragonBall.edades = [50,30,10];
console.log(PersonajesDragonBall)

delete PersonajesDragonBall.nombres;

let personajes_naruto = {
    nombre : "naruto",
    edad: 25,
    Poder: "Estrella de mar"
}

console.log(personajes_naruto)
console.log(personajes_naruto.edad)
console.log(personajes_naruto["edad"])


let nombres_super_campeones = {
    nombre: "Oliver",
    edad: 15,
    apellido: "Atom"
}
console.log(nombres_super_campeones["apellido"])
nombres_super_campeones.edad = 20,
console.log(nombres_super_campeones.edad)