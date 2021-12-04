import "./beer.css";
import Card from "./Card";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Beer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.punkapi.com/v2/beers"
            )
            .then((res) => {
                setData(res.data);
            });
    }, []);


    return (
        <div className="beer">
            <h1>salut</h1>
            <ul className="beer-list">
                {data.map((beer) => (

                    <Card beer={beer} key={beer.name} />
                ))}

            </ul>
        </div>

    );

};

export default Beer;