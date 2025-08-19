let pokemonURL = "https://pokeapi.co/api/v2/pokemon/3";

const idPokemon = document.getElementById("idpokemon");
const nombrePokemon = document.getElementById("nombrepokemon");
const imagenPokemon = document.getElementById("imagenpokemon");
const movimientoPokemon = document.getElementById("movimientopokemon");
const tipoPokemon = document.getElementById("tipopokemon")

fetch(pokemonURL)
  .then(respuesta => respuesta.json())
  .then(data => {
    idPokemon.textContent = data.id;
    nombrePokemon.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    imagenPokemon.src = data.sprites.front_default;
    movimientoPokemon.textContent = capitalizarMovimiento(data.moves[0].move.name);
    tipoPokemon.textContent = data.types
      .map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))
      .join(" | ");
    
    console.log("CANTIDAD DE TIPOS:",data.types.length)
  })
  .catch(error => console.log(error));


function capitalizarMovimiento(movimiento) {
  return movimiento
    .split("-")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join("-");
}

