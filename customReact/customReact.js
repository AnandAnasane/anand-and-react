function customRender(reactElement, container) {
    //First method
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute("href", reactElement.props.href);
//   domElement.setAttribute("_blank", reactElement.props.target);
//   container.appendChild(domElement);

// Second Method
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children

for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domElement)



}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click to visit google",
};

const container = document.querySelector("#root");

customRender(reactElement, container);
