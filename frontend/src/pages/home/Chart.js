import "./chart.css";
import { Bar } from "react-chartjs-2";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Chart = () => {
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

    const numberFormat = (x) => {
        return parseInt(x);
    }

    var tab = [];

    const tabl = () => {
        data.map((beer) => (
            tab.push(numberFormat(beer.consommation))
        ))

    }

    var tabBiere = [];

    const tabiere = () => {
        data.map((beer) => (
            tabBiere.push(beer.nom)
        ))

    }

    const truc = () => {
        for (let i = 0; i < tab.length; i++) {
            datas.datasets[0].data[i] = tab[i];
        }
    }

    const truc2 = () => {
        for (let i = 0; i < tabBiere.length; i++) {
            datas.labels[i] = tabBiere[i];
        }
    }


    const datas = {

        labels: [],
        datasets: [
            {
                width: "400px",
                height: "200px",
                label: "Couleurs préférés en France",
                data: [],
                backgroundColor: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow", "pink"],
            }
        ]


    }
    return (
        <div className="chart">
            <h1>chart</h1>
            <div>
                <div>
                    {tabl()}
                    {tabiere()}
                    {truc()}
                    {truc2()}
                </div>

                <ul>
                    <li>{tab[0]}</li>
                </ul>
            </div>

            <div className="container">
                <div className="card">
                    <Bar data={datas} />
                </div>





            </div>

        </div>

    );

};

export default Chart;