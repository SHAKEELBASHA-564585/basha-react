
import React from 'react'
import ReactDOM from "react-dom/client"

const head1=React.createElement("h1",{},"Namasthe Everone From React basha!");
const head2=React.createElement('h2',{},"Namaste raa  Basha")
const container=React.createElement("div",{
    id:"container"
},[head1,head2])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);