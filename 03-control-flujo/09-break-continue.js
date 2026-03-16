let i = 0;
while (i < 6) {
    i++;
    if (i === 2) {
        continue; // saltar una vuelta del bucle - Solo salta la interaccion
    }
    if (i === 4) {
        break;   // Sire para detener completamente los buclez
    }
    console.log(i);
}

