import createElement from './createElement'
import createContact from './contact'
import createReservation from './reservation'
import createMenu from './menu'

const createHome = () => {
    const home = createElement('main', null, 'main')
    home.appendChild(createMenu())
    home.appendChild(createReservation())
    home.appendChild(createContact())

    return home
}

export default createHome