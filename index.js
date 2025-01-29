//^Create Element using js

// const heading = document.createElement("h1")
// heading.innerHTML=" hello world using js"
// const root = document.getElementById("root")
// root.appendChild(heading)

//cdn
//Content Delivery Network. It is a network that helps to speed up web page loading for web users

//^Create Element using React

// const heading = React.createElement(
//     "h1",
//     {id:heading,
// // props = children + attribute
// },
// "hello world using react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // display element and put in DOM tree

//^Create Element using NESTED React ELEMENT (table)
/**
 * <div id="parent">
    <div id="child">
        <h1>"I am h1 tag"</h1>
        <h2>"I am h2 tag"</h2>
    </div>
    <div id="child2">
        <h1>"I am h1 tag"</h1>
        <h2>"I am h2 tag"</h2>
    </div>
</div>
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag in child2"),
    React.createElement("h2", {}, "I am h2 tag in child2")
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  // react works only in his root
console.log(parent);
