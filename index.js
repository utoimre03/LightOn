export function listaGeneral() {
    const lista = [];
    for (let index = 0; index < 9; index++) {
        let randomszam = Math.floor(Math.random() * 2);
        lista.push(randomszam);
    }
    //console.log(lista)
    return lista
}

export function jatekTabla(lista) {
    let txt = ""
    for (let index = 0; index < lista.length; index++) {
        txt += `<div id="tabla">
        <p>${lista[index]}</p>
        </div>
        `
    }
    return txt
}

const tablaELEM = $("#tabla")
tablaELEM.html(jatekTabla(listaGeneral()))

export function kapcsolo(lista) {}

for (let index = 0; index < lista.length; index++) {
    if (lista[index] == 0) {
        lista[index] + 1 == 1
        lista[index] - 1 == 1
        lista[index] + 3 == 1
        lista[index] - 3 == 1
    }
}

const kapcsoloELEM = $("#tabla")
kapcsoloELEM = $("#tabla").on("click", function() {

})
