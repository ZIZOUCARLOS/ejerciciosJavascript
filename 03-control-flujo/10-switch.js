// Se usa cuando una variable puede tener varios valores posibles.

let accion = 'listar';

switch (accion){
    case 'listar':
        console.log(' Accion de listar');
        break;

    case 'guardar':
        console.log('Accion de Guardar')
        break;

    default :
        console.log('Accion no reconocida');
}