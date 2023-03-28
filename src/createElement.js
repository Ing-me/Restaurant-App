const Element = (el, content,className) => {
    const elem = document.createElement(el);
    elem.innerHTML = content;
    elem.classList.add(className)
    return elem;
}

export default Element;