
let listanombreGastos = [];
let listavalorGastos = [];

function clickBoton() {

    let valorNombre = document.querySelector('#nombreGasto').value;
    let valorGasto = Number(document.querySelector('#valorGasto').value);

    listanombreGastos.push(valorNombre);
    listavalorGastos.push(valorGasto);

    
    actualizargastos()
   
}



function actualizargastos() {
    const listagastos = document.querySelector('#listaDeGastos');
    const listaelementos = document.querySelector('#totalGastos')
    let lista = '';
    let totalgastos = 0;
    listanombreGastos.forEach((elemnto, posicion) => {
        const valordegastos = listavalorGastos[posicion];
        lista += `<li>${elemnto} - USD ${valordegastos.toFixed(2)}
        <button  onclick="eliminarGasto(${posicion})">Eliminar</button>
        </li>`;
        totalgastos += Number(valordegastos);
    });
    
    listagastos.innerHTML = lista;
    listaelementos.innerHTML = totalgastos.toFixed(2)
    limpiar()
}

function limpiar() {
    document.querySelector('#nombreGasto').value = '';
    document.querySelector('#valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listanombreGastos.splice(posicion, 1)
    listavalorGastos.splice(posicion, 1)
    actualizargastos()
}
 
