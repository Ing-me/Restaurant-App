import './style.css'
import createHeader from './header'
import createFooter from './footer';
import createHome from './home';

function component() {

    const element = document.querySelector('#content');
    element.classList.add('container')
    
    element.appendChild(createHeader())
    element.appendChild(createHome())
    element.appendChild(createFooter())
    

    return element;

}
document.body.appendChild(component());

