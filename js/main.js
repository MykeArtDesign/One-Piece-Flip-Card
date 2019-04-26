// DOM

const card = document.querySelectorAll('.card')
const frontCard = document.querySelectorAll('.card .card-container .front-face')
const backCard = document.querySelectorAll('.card .card-container .back-face')
const button = document.querySelectorAll('button')

for(let i = 0; i < frontCard.length; i++)
{
	card[i].onmouseenter = () => 
	{
		frontCard[i].className = "front-face frontCard"
		backCard[i].className = "back-face backCard"
	}

	card[i].onmouseleave = () => 
	{
		frontCard[i].className = "front-face"
		backCard[i].className = "back-face"
	}

	button[i].onclick = () => 
		{
			frontCard[i].classList.toggle("front-reverse")
			backCard[i].classList.toggle("back-reverse")
		}
}
