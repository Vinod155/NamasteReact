const parent = React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child" }, [React.createElement(
            "h1", {},
            "i am an h1 tag"), React.createElement("h1", {}, "i am the second h1 tag")]))
    //const heading = React.createElement("h1", {}, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)