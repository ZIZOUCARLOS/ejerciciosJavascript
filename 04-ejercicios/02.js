function nombreResolucion(ancho, alto) {

    if (ancho >= 1920 && alto >= 1080) {
        return "Full HD";
    } 
    
    else if (ancho >= 1366 && alto >= 768) {
        return "HD";
    } 
    
    else {
        return "Resolución baja";
    }
}

let nombre = nombreResolucion(1366, 768)

console.log(nombre)

