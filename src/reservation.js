import createElement from './createElement'

const createReservation = () => {
    const reservation = createElement('section', null, 'reservation')
    reservation.setAttribute("id","reservation")
    const form = createElement('form', null, 'form')
    form.setAttribute("method", "post")
    const h1 = document.createElement("h1")
    h1.innerHTML = "Book Table here"
    
    // Creating inputs
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "fulleName")
    nameInput.setAttribute("placeholder", "Your fullname please!")

    const emailInput = document.createElement("input")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("name", "email")
    emailInput.setAttribute("placeholder", "Your email please!")

    const phoneInput = document.createElement("input")
    phoneInput.setAttribute("type", "phone")
    phoneInput.setAttribute("name", "phone")
    phoneInput.setAttribute("placeholder", "Your phone please!")

    const personInput = document.createElement("input")
    personInput.setAttribute("type", "number")
    personInput.setAttribute("name", "person")
    personInput.setAttribute("placeholder", "How many people")

    const dateInput = document.createElement("input")
    dateInput.setAttribute("type", "date")
    dateInput.setAttribute("name", "reservationDate")

    const sutbmitBtn = document.createElement("input")
    sutbmitBtn.setAttribute("type", "submit")
    sutbmitBtn.setAttribute("value", "Submit")

    form.appendChild(nameInput)
    form.appendChild(emailInput)
    form.appendChild(phoneInput)
    form.appendChild(personInput)
    form.appendChild(dateInput)
    form.appendChild(sutbmitBtn)

    reservation.appendChild(h1)
    reservation.appendChild(form)
    return reservation
}

export default createReservation