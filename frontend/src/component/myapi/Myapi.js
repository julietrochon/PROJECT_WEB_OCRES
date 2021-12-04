import "./myapi.css";
import Card from "../beer/Card";
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
            <h1>salut toi </h1>
            <ul className="beer-list">
                {data.map((beer) => (

                    <Card beer={beer} key={beer.name} />
                ))}

            </ul>
        </div>

    );

};

export default Myapi;