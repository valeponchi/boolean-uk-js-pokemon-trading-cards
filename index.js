// write your code here!
// This variable has the data you're working with

console.log(data);
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

function createCard(number) {
let cards = document.querySelector(`.cards`)

let card = document.createElement(`article`)
cards.append(card)


let cardTitle = document.createElement(`h2`)
cardTitle.innerText = data[number].name
cardTitle.setAttribute(`class`, `card--title`)
card.append(cardTitle)



let cardImg = document.createElement(`img`)
cardImg.setAttribute(`class`, `card--img`)
cardImg.setAttribute(`src`, data[number].sprites.other["official-artwork"].front_default)
card.append(cardImg)

//CHALLENGE:
// INSTRUCTIONS HERE:
//fare il loop del pokemon ID (number) 
//a ogni loop prendere quei due dati che mi servono

// MY CODE HERE:
// let cardText = document.createElement(`div`)
// cardText.setAttribute(`class`, `card--text`)
// card.append(cardText)

// let textInsideCardText = document.createElement(`p`)

// let pokemonID = data[0].id
// for (i=0; i < data[0].stats.length; i++) {
//   let stat = data.stats[0].stat.name + ":" + data.stats[0].base_stat
// }
}

for (let i=0; i<20; i++) {
createCard(i);
}

