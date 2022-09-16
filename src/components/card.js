import React from "react";

function Card(props) {
    return (
            <li className="homes__item">
                <img src = {props.imageUrl} alt = {props.name} className="homes__image"/>
                <h3 className="homes__subtitle">{props.name}</h3>
                <p className="homes__desc">{props.city}, {props.country}</p>
            </li>
    );
}

export default Card;