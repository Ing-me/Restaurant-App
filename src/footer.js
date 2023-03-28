import createElement from './createElement'

const createFooter = () => {
   const footer = createElement('footer', null, 'footer')
   const p = createElement('p', 'Powered by KwenTIC', 'p-text')
   const p1 = createElement('p', 'CopyRight 2023', 'p-text')

   footer.appendChild(p)
   footer.appendChild(p1)

   return footer
}

export default createFooter;