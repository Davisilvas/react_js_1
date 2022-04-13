import React from "react";

function Menu(props){

    const newLink = props.links.map((link, index) => <li key= {index}>{link}</li>)

    return(
        <ul className="menu">
            {newLink}
        </ul>)
}

export default Menu;

