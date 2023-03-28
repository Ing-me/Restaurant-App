import createElement from './createElement'

const createContact = () => {
    const contact = createElement('section', null, 'contact')
    contact.setAttribute("id","contact")
    const form = createElement('form', null, 'form')
    form.setAttribute("method", "post")
    const h1 = document.createElement("h1")
    h1.innerHTML = "Contact us"
    
    // Creating inputs
    const nameInput = document.createElement("input")
    nameInput.setAttribute("type", "text")
    nameInput.setAttribute("name", "fulleName")
    nameInput.setAttribute("placeholder", "Your fullname please!")

    const emailInput = document.createElement("input")
    emailInput.setAttribute("type", "email")
    emailInput.setAttribute("name", "email")
    emailInput.setAttribute("placeholder", "Your email please!")

    const messageInput = document.createElement("textarea")
    messageInput.setAttribute("type", "text")
    messageInput.setAttribute("name", "message")
    messageInput.setAttribute("placeholder", "Your message here")
    messageInput.cols = 50;
    messageInput.rows = 10
    

    const sutbmitBtn = document.createElement("input")
    sutbmitBtn.setAttribute("type", "submit")
    sutbmitBtn.setAttribute("value", "Submit")

    form.appendChild(nameInput)
    form.appendChild(emailInput)
    form.appendChild(messageInput)
    form.appendChild(sutbmitBtn)

    contact.appendChild(h1)
    contact.appendChild(form)
    
    return contact
}
export default createContact;