/*Consume API of Pokemon*/

async function getPokemon() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();
    console.log(data);
    //Introduce pokemons in the HTML
    data.results.map((pokemon) => {
      let div_pokemon = document.createElement("div");
      div_pokemon.classList.add(
        "flex",
        "justify-center",
        "items-center",
        "p-2",
        "bg-gray-200",
        "m-2",
        "rounded-md",
        "shadow-md",
        "text-center"
      );
      div_pokemon.innerHTML = `<p>${pokemon.name}</p>`;
      document.getElementById("lista").appendChild(div_pokemon);
    });
  } catch (error) {
    console.error(error);
  }
}

getPokemon();

/*
  Mejorar el codigo para agregar la imagen de cada pokemon y el tipo

  Opcional: Crear una paginación para mostrar los pokemones de 20 en 20 hasta el final de la lista
*/


