// write your code here!
// This variable has the data you're working with

console.log(data);
//INSTRUCTIONS:
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS



//THIS FUNCTION CREATE THE CARD (TITLE-PHOTO-DATA):
function createCard(number) {
let cards = document.querySelector(`.cards`)

let card = document.createElement(`article`)
card.setAttribute(`class`, `card`)
cards.append(card)

//TITLE
function capitaliFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let cardTitle = document.createElement(`h2`)
cardTitle.innerText = capitaliFirstLetter(data[number].name)
cardTitle.setAttribute(`class`, `card--title`)
card.append(cardTitle)


//IMG
let cardImg = document.createElement(`img`)
cardImg.setAttribute(`class`, `card--img`)
cardImg.setAttribute(`src`, data[number].sprites.other["official-artwork"].front_default)
card.append(cardImg)

//CHANGE IMG when toggle
// function changeImg(){
//   let elem = document.getElementById(``)
//   elem.style. //lost
// }

// let newImg = data[number].sprites. //lost



//THIS STEP CREATES THE STAT OF EACH POKEMON:
//this is the <div> where the STATS will go:
let cardText = document.createElement(`div`)
cardText.setAttribute(`class`, `card--text`)
card.append(cardText)


//THIS LOOP gets the stats-data from each pokemon:
for (i=0; i < data[number].stats.length; i++) {

  let textInsideCardText = document.createElement(`p`)

  textInsideCardText.innerText = data[number].stats[i].stat.name + ":" + data[number].stats[i].base_stat

  cardText.append(textInsideCardText)
}
}

//THIS STEP CREATES THE CARDS UP TO 20:
for (let i=0; i<20; i++) {
createCard(i);
}

//NB: I want to make the name with first letter capital

//border of each card - do I have to change CSS?

//