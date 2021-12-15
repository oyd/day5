import React from "react";
import ReactDom from "react-dom";
import "./../sass/styles.scss";

function App() {
    return (<>
        <h2>Welcome to React App</h2>
        <h3>Date : {new Date().toDateString()}</h3>
    </>);
}

ReactDom.render(<App />, document.getElementById('app'));