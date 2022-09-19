import React from 'react';
import Card from "./card";
import Title from "./title";
import hotelsInfo from "../constants/hotelsInfo";
import '../styles/homes.css';

function Homes() {
    return(
        <section className="homes">
            <Title name = {"Homes guests loves"} />
                <ul className="homes__list">
                    {hotelsInfo.map((hotel) => (
                        <Card
                            imageUrl={hotel.imageUrl}
                            name={hotel.name}
                            city={hotel.city}
                            country={hotel.country}
                            key={hotel.id}
                        />
                    ))}
                </ul>
        </section>
    )
}

export default Homes;