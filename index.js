const searchPokemon = document.getElementById("searchPokemon");
const searchButton = document.getElementById("searchButton");
const container = document.querySelector(".container")

searchButton.addEventListener("click", async ()=>{
    try {
        const data = searchPokemon.value
        const obj = {data}
        const response = await fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)

    })
        if(response.ok){
            const pokemon = await response.json()
            console.log(pokemon);
            const card = document.createElement("div")
            const img = document.createElement("img")
            const h3 = document.createElement("h3")
            img.setAttribute("src", pokemon.sprites.front_default)
            h3.textContent = pokemon.name
            card.classList.add("card")
            card.append(img,h3)
            container.appendChild(card)
            
        }else(
            console.log(response.status)
        )
    } catch (error) {
        console.log(error);
    }


})

