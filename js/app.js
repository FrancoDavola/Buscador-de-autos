const marca = document.querySelector('#marca')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')
const max = new Date().getFullYear()
const min = max - 10

document.addEventListener('DOMContentLoaded' , () => {
    mostrarAutos(autos)
    llenarSelect()
})

marca.addEventListener('change' , (e) => {
  datosBusqueda.marca = e.target.value
  filtrarAuto()
})

year.addEventListener('change' , (e) => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
  })

  minimo.addEventListener('change' , (e) => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
  })

  maximo.addEventListener('change' , (e) => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
  })

  puertas.addEventListener('change' , (e) => {
    datosBusqueda.puertas = e.target.value
    filtrarAuto()
  })

  transmision.addEventListener('change' , (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
  })

  color.addEventListener('change' , (e) => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
 
  })

const datosBusqueda = {
    marca: '', 
    modelo: '', 
    year: '', 
    precio: '', 
    puertas:'' , 
    color: '', 
    transmision: ''
}





function mostrarAutos(autos){
    
    autos.forEach(auto => {
        const {marca , modelo , year , precio , transmision , color , puertas , img} = auto
        const autoHTML = document.createElement('p')
        /* const imagenHTML = document.createElement('img').src */
        
        autoHTML.textContent = `
        
        ${marca} - ${modelo} - ${year} - Precio: $${precio} - ${transmision} - ${color} - Puertas :${puertas}
        
        `
        resultado.appendChild(autoHTML)
        
    });
}

function llenarSelect(){
    for(let i = max ; i >= min ; i--){
       const todosLosYear =  document.createElement('option')
       todosLosYear.textContent = `
       ${i}
       `
  year.appendChild(todosLosYear)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filterMarcar).filter(filterYear).filter(filterPrecioMinimo).filter(filterPrecioMaximo).filter(filterPuertas).filter(filterTransmision).filter(filterColor)
    limpiarHTML()

    if(resultado.length){
        mostrarAutos(resultado)
    }else {
        noHayResultado()
    }

    
    

}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function filterMarcar(auto){
    if(datosBusqueda.marca){
     return auto.marca == datosBusqueda.marca
    }else {
        return auto
    }
}

function filterYear(auto){
    if(datosBusqueda.year){
     return auto.year == datosBusqueda.year
    }else {
        return auto
    }
}

function filterPrecioMinimo(auto){
    if(datosBusqueda.minimo){
     return auto.precio <= datosBusqueda.minimo
    }else {
        return auto
    }
}

function filterPrecioMaximo(auto){
    if(datosBusqueda.maximo){
     return auto.precio >= datosBusqueda.maximo
    }else {
        return auto
    }
}

function filterPuertas(auto){
    if(datosBusqueda.puertas){
     return auto.puertas == datosBusqueda.puertas
    }else {
        return auto
    }
}

function filterTransmision(auto){
    if(datosBusqueda.transmision){
     return auto.transmision == datosBusqueda.transmision
    }else {
        return auto
    }
}

function filterColor(auto){
    if(datosBusqueda.color){
     return auto.color == datosBusqueda.color
    }else {
        return auto
    }
}

function noHayResultado(){
    const sinResultado = document.createElement('p')
    sinResultado.textContent = 'sin resultado'

    resultado.appendChild(sinResultado)
}