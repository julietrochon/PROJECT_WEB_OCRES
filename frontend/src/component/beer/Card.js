import React from 'react';
import "./card.css";

const Card = (props) => {

    const { beer } = props;

    console.log(beer);

    return (


        <div className="card">
            <img className='image' src={beer.image_url} alt="picture" />
            <div className="info">
                <ul>
                    <li className="element">{beer.name}</li>
                    <li className="element">{beer.abv}</li>
                    <li className="element">{beer.first_brewed}</li>
                </ul>
            </div>
        </div>


    );
};

export default Card;