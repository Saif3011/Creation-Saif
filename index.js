//^Create Element using js

// const heading = document.createElement("h1")
// heading.innerHTML=" hello world using js"
// const root = document.getElementById("root")
// root.appendChild(heading)

//cdn
//Content Delivery Network. It is a network that helps to speed up web page loading for web users

//^Create Element using React

const heading = React.createElement(
    "h1", 
    {id:heading,
// props = children + attribute
}, 
"hello world using react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // display element and put in DOM tree
