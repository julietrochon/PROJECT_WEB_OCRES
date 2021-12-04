import React from 'react';
import "./card.css";

const Card = (props) => {

    const { beer } = props;

    console.log(beer);

    return (


        <div className="card">
            <div className="info">
                <ul>
                    <li className="element">{beer.nom}</li>
                    <li className="element">{beer.bracerie}</li>
                    <li className="element">{beer.consommation}</li>
                    <li className="element">{beer.dateCreation}</li>
                    <li className="element">{beer.degre}</li>
                    <li className="element">{beer.specialisation}</li>
                </ul>
            </div>
        </div>


    );
};

export default Card;