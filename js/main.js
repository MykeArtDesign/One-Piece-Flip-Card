// DOM

const card = document.querySelectorAll('.card')
const frontCard = document.querySelectorAll('.card .card-container .front-face')
const backCard = document.querySelectorAll('.card .card-container .back-face')
const button = document.querySelectorAll('.sect button')
const buttonSection = document.querySelector('.sect')
const plus = document.querySelector('.plus')

// Boucle pour cartes
for(let i = 0; i < frontCard.length; i++)
{
  // Déclencher l'animation
  card[i].onmouseenter = () => 
  {
    frontCard[i].className = "front-face frontCard"
    backCard[i].className = "back-face backCard"
  }
  // Stopper l'animation
  card[i].onmouseleave = () => 
  {
    frontCard[i].className = "front-face"
    backCard[i].className = "back-face"
  }
  // Animation au click 180°
  button[i].onclick = () => 
  {
    frontCard[i].classList.toggle("front-reverse")
    backCard[i].classList.toggle("back-reverse")
  }

}
// Bouton plus pour cacher 
plus.onclick = () => buttonSection.classList.toggle('hide')