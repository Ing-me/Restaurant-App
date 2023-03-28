import createElement from './createElement';
import menu1 from './menu1.jpg'
import menu2 from './menu2.jpg'
import menu3 from './menu3.jpg'
import menu5 from './menu5.jpg'

const createCards =  () => {
 const cards = createElement('div', null, 'cards')
 const card = createElement('div',null, 'card')
 const card1 = createElement('div',null, 'card')
 const card2 = createElement('div',null, 'card')
 const card3 = createElement('div',null, 'card')
 const cardHeader = createElement('div', null, 'cardHeader')
 const cardHeader1 = createElement('div', null, 'cardHeader')
 const cardHeader2 = createElement('div', null, 'cardHeader')
 const cardHeader3 = createElement('div', null, 'cardHeader')

 const cardBody = createElement('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')
 const cardBody1 = createElement('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')
 const cardBody2 = createElement('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'cardBody')
 const cardBody3 = createElement('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')

 const Mymenu = new Image();
 Mymenu.src = menu1
 Mymenu.classList.add('cardImage')

 const Mymenu1 = new Image();
 Mymenu1.src = menu2
 Mymenu1.classList.add('cardImage')

 const Mymenu2 = new Image();
 Mymenu2.src = menu3
 Mymenu2.classList.add('cardImage')

 const Mymenu4 = new Image();
 Mymenu4.src = menu5
 Mymenu4.classList.add('cardImage')

 cardHeader.appendChild(Mymenu)
 cardHeader1.appendChild(Mymenu1)
 cardHeader2.appendChild(Mymenu2)
 cardHeader3.appendChild(Mymenu4)

 card.appendChild(cardHeader)
 card.appendChild(cardBody)

 card1.appendChild(cardHeader1)
 card1.appendChild(cardBody1)

 card2.appendChild(cardHeader2)
 card2.appendChild(cardBody2)

 card3.appendChild(cardHeader3)
 card3.appendChild(cardBody3)

 cards.appendChild(card)
 cards.appendChild(card1)
 cards.appendChild(card2)
 cards.appendChild(card3)

 return cards
}
export default createCards
