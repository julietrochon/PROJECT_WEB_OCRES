import React from 'react';
import "./home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="productTitleContainer">
                <h1 className="productTitle">Home</h1>
            </div>


            <div className="productTop">
                <div className="productTopLeft">
                    <span className="productName"> widget 1</span>
                </div>

                <div className="productTopRight">
                    <span className="productName"> widget 2</span>
                </div>
            </div>

            <div className="productBottom">

                <span className="productName"> widget 3</span>

            </div>

        </div>
    )

}