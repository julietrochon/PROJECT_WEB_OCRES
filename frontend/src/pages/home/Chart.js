import "./chart.css";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chrono } from 'react-chrono';
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

    var chiffres = [];
    var leader = [];
    const tabchiffre = () => {
        data.map((beer) => (
            chiffres.push(numberFormat(beer.consommationFrance))
        ))
        data.map((beer) => (
            leader.push(numberFormat(beer.producteurFrance))
        ))
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

    var tabDate = [];
    const tadate = () => {
        data.map((beer) => (
            tabDate.push(numberFormat(beer.dateCreation))
        ))
        tabDate.sort();
    }

    var tabBrasserie = [];
    const tabrasserie = () => {
        data.map((beer) => (
            tabBrasserie.push(beer.bracerie)
        ))
    }

    var tabBrass = [];
    var tabConso = [];
    const transfo = () => {

        let tabbra = 0;
        let tabbra1 = 0;
        let tabbra2 = -1;

        let arg = 0;
        let arg1 = 0;
        let arg2 = 0;

        for (let i = 0; i <= tabBrasserie.length; i++) {
            if (tabBrasserie[i] === 'Heineken') {
                arg += tab[i];
                tabbra += 1;
            }
            else if (tabBrasserie[i] === 'Carlsberg') {
                arg1 += tab[i];
                tabbra1 += 1;
            }
            else {
                arg2 += tab[i];
                tabbra2 += 1;
            }

        }
        tabBrass.push(tabbra);
        tabBrass.push(tabbra1);
        tabBrass.push(tabbra2);

        tabConso.push(arg);
        tabConso.push(arg1);
        tabConso.push(920);

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

    const truc3 = () => {
        for (let i = 0; i < tabDate.length; i++) {
            datasss.labels[i] = tabDate[i] + " " + tabBiere[i];
        }
    }

    const truc4 = () => {
        for (let i = 0; i < tabConso.length; i++) {
            datass.datasets[0].data[i] = tabConso[i];
        }
    }

    const datas = {
        labels: [],
        datasets: [
            {
                width: "400px",
                height: "200px",
                label: "nombres de bières consommées par marques",
                data: [],
                backgroundColor: ["Orange"],
            }
        ]
    }

    const datasss = {
        labels: [],
        datasets: [
            {
                width: "400px",
                height: "200px",
                label: "Timeline de la création des différentes bières",
                data: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
                backgroundColor: ["Orange"],
            }
        ]
    }

    const datass = {
        labels: ["Heineken", "Carlsberg", "Autre"],
        datasets: [
            {
                width: "100px",
                height: "100px",
                label: "répartition des brasseries par ventes de bières",
                data: ["1", "1", "1"],
                backgroundColor: ["Orange"],
            }
        ]
    }

    tabchiffre();
    tabl();
    tabiere();
    tadate();
    truc();
    truc2();
    truc3();
    tabrasserie();
    transfo();
    truc4();


    return (
        <div className="chart">
            <h1>chart</h1>
            <div className="container">
                <h2> La france consomme en moyenne {chiffres[0]} Litres de bières par an</h2>

            </div>
            <div className="container">

                <h2> La france est le {leader[0]} ème leader mondial en terme de production de bières</h2>

            </div>

            <div className="container">
                <div className="card">
                    <Bar data={datas} />
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <Line data={datasss} />
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <Doughnut data={datass} />
                </div>
            </div>


        </div>

    );

};

export default Chart;