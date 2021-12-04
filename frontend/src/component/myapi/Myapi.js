import "./myapi.css";
//import ".../backend/routes/posts.js";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Myapi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://localhost:3000/posts"
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

                    <li>{beer.title}</li>
                ))}

            </ul>
        </div>

    );

};

export default Myapi;