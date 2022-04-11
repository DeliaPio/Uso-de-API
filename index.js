let boton_solicitud = document.getElementById('Buscar')
let input_num = document.getElementById('PokemonNum')
let imagen_respuesta1 = document.getElementById('respuesta1')
let imagen_respuesta2 = document.getElementById('respuesta2')
let boton_editar = document.getElementById('editar')
var TablaResultados = document.getElementById("Elem")


boton_solicitud.addEventListener('click', realizarSolicitud)
boton_editar.addEventListener('click', function(event){
    console.log(event.target.innerHTML)
    window.comunicacion.editarImagen(event.target.innerHTML)
})
console.log(imagen_respuesta)
function realizarSolicitud(){
    let tipo_vacio = input_num.value 
    if(tipo_vacio == ''){
	tipo_vacio = Math.floor(Math.random() * 898) + 1
        fetch(`https://pokeapi.co/api/v2/pokemon/${tipo_vacio}/`)
        .then(response => response.json())
        .then(pokemon =>{
           console.log(pokemon)
           imagen_respuesta1.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${tipo_vacio}.png`)
           imagen_respuesta2.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back//${tipo_vacio}.png`)
           TablaResultados.innerHTML += "<tr>"+
                                            "<td>"+pokemon.order+"</td>"+
                                            "<td>"+pokemon.name+"</td>"+
                                            "<td>"+pokemon.types[0].type.name+"</td>"+
                                         "</tr>"
        })


    }else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${tipo_vacio}/`)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            imagen_respuesta1.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${tipo_vacio}.png`)
            imagen_respuesta2.setAttribute('src',`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back//${tipo_vacio}.png`)
            TablaResultados.innerHTML += "<tr>"+
                                            "<td>"+pokemon.order+"</td>"+
                                            "<td>"+pokemon.name+"</td>"+
                                            "<td>"+pokemon.types[0].type.name+"</td>"+
                                         "</tr>"
        })
    }
}