document.addEventListener('DOMContentLoaded', function () {
    showInfo();
})
document.getElementById('btn-add-nota').addEventListener('click', function () {
    getInfo(nota)
    setInfo(nota)
    showInfo()
})
document.getElementById('btn-clean-nota').addEventListener('click', function () {
    cleanInfo()
    showInfo()
})
//recoger la informacion
function getInfo() {
    //devuelve el texto que se introduce en el div.nota
    let nota = document.getElementById('nota').innerHTML
    return nota
}
//almacenar la información en local Storage
function setInfo(nota) {
    //guarda la información en local Storage
    const clave = Date.now()
    localStorage.setItem(clave, getInfo(nota))
    //localStorage.setItem(clave, getInfo(nota))

}
//leer la información y sacarla por pantalla
function showInfo() {
    // console.log(localStorage.length)
    //leerla
    //si no hay nada mostrar: No hay nada que mostrar
    //mostrarla por pantalla
    document.getElementById('show-notas').innerHTML = ``  
    if (localStorage < 1){
        document.getElementById('show-notas').innerHTML='No hay notas todavía'
    }else{for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index)
        let valor = localStorage[clave]
        console.log(valor)
        let elemento = `
<div class="lista-nota">
${valor}
</div>
`
        document.getElementById('show-notas').innerHTML += elemento
    }
}}
        
//limpiar la información
function cleanInfo() {
    //limpiar local storage y pantalla
    localStorage.clear();
    // console.log('en localStorage no hay notas')
}