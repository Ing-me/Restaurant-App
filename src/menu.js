import createElement from './createElement'
import prestige from './prestige1.jpg'
import cards from './cards'
const createMenu = () => {
    const menu = createElement('section', null, 'menu')
    menu.setAttribute("id","menu")
    const h1 = createElement('h1', 'The Menu','menuText')
    const div = createElement('div', null, 'menuContainer')
    const myPrestige = new Image();
    myPrestige.src = prestige;
    myPrestige.classList.add('prestigeImage')
    div.appendChild(myPrestige)
    div.appendChild(cards())
    menu.appendChild(h1)
    menu.appendChild(div)

    return menu
}

export default createMenu