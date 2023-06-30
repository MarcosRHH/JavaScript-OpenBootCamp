const parrafo = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const papelera = document.querySelectorAll('.papelera')

parrafo.forEach(parrafo => {
    // El dragstart es el inicio del arrastre
    parrafo.addEventListener("dragstart", evento => {
        parrafo.classList.add("dragging")
        console.log("dragstart");
        evento.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        evento.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })
    // El dragend es el final del arrastre
    parrafo.addEventListener("dragend", evento => {
        console.log("dragend");
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    // El dragover es el escuchador de eventos 
    seccion.addEventListener("dragover", evento => {
        console.log("dragover");
        evento.preventDefault()
        evento.dataTransfer.dropEffect = "copy" // copy por defecto
    })
    // El evento drop es el que lo que hace que ocurra algo tras el drag
    seccion.addEventListener("drop", evento => {
        console.log("Drop")
        const id_parrafo = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})

papelera.forEach(elemento => {
    // El dragover es el escuchador de eventos 
    elemento.addEventListener("dragover", evento => {
        console.log("dragover");
        evento.preventDefault()
        evento.dataTransfer.dropEffect = "copy" // copy por defecto
    })
    // El evento drop es el que lo que hace que ocurra algo tras el drag
    elemento.addEventListener("drop", evento => {
        console.log("Drop")
        const id_parrafo = evento.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})