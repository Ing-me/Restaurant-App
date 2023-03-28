import createElement from './createElement'
import menu from './men.png'

const  Header = () => {
    //const element = document.querySelector('#content')
   const nav = createElement('nav', null, 'navBar')
   const label = createElement('label',null,'logo')
   const ul = createElement('ul', null, 'link-navigation')
   const li = createElement('li', null, 'link')
   const li1 = createElement('li', null, 'link')
   const li2 = createElement('li',null,'link')
   const a = createElement('a', 'Home', 'link-item')
   a.setAttribute("href", "#menu")
   const a1 = createElement('a', 'Menu', 'link-item')
   a1.setAttribute("href", "#reservation")
   const a2 = createElement('a', 'Contact', 'link-item')
   a2.setAttribute("href", "#contact")

  const myMenu = new Image();
  myMenu.src = menu
  myMenu.classList.add('menuBtn')
   label.innerHTML = "Le Goûté"

   myMenu.addEventListener('click', () => {
    ul.classList.toggle('active')
   })

   li.appendChild(a)
   li1.appendChild(a1)
   li2.appendChild(a2)

   ul.appendChild(li)
   ul.appendChild(li1)
   ul.appendChild(li2)

   nav.appendChild(label)
   nav.appendChild(ul)
   nav.appendChild(myMenu)

    

    //element.appendChild(nav)
   return nav;
}

export default Header;