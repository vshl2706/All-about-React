function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */


    // Modular code below
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const i in reactElement.props){
        if(i === 'children') continue;
        domElement.setAttribute(i, reactElement.props[i])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)