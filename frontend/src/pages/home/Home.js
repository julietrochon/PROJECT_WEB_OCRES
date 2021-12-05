import React, { useState, useEffect } from "react";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import "./home.css";
import axios from "axios";


const Home = () => {

    //On RECUPERE L API QU ON A CREER
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

    //FONCTION TRANSFORME LES STRING EN INT
    const numberFormat = (x) => {
        return parseInt(x);
    }

    //ON RECUPERE LES VALEURS DU CLASSEMENT DE LA FRANCE EN CONSO ET PRODUCTION
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
    tabchiffre();

    // ON RECUPERE LA CONSOMMATION DE BIERE PAR MARQUE
    var tab = [];
    const tabl = () => {
        data.map((beer) => (
            tab.push(numberFormat(beer.consommation))
        ))
    }
    tabl();

    // ON RECUPERE LE NOM DES MARQUES DE BIERES
    var tabBiere = [];
    const tabiere = () => {
        data.map((beer) => (
            tabBiere.push(beer.nom)
        ))

    }
    tabiere();

    // ON RECUPERE LES DONNEES DES DATES DES PREMIERES BIERES
    var tabDate = [];
    const tadate = () => {
        data.map((beer) => (
            tabDate.push(numberFormat(beer.dateCreation))
        ))
        tabDate.sort();
    }
    tadate();

    //ON RECUPERE LA SPECIALISATION DE CHAQUE MARQUE DE BIERES
    var tabCouleur = [];
    const tacouleur = () => {
        data.map((beer) => (
            tabCouleur.push(beer.specialisation)
        ))
        for (let i = 0; i <= tabCouleur.length; i++) {

        }
    }
    tacouleur();

    // ON RECUPERE LES BRACERIES D ORIGINE
    var tabBrasserie = [];
    const tabrasserie = () => {
        data.map((beer) => (
            tabBrasserie.push(beer.bracerie)
        ))
    }
    tabrasserie();


    // CALCULE GRAPHE COULEUR DE BIERE
    var tabcoul = [];
    const coul = () => {
        let couleur = 0;
        let couleur1 = 0;
        let couleur2 = 0;
        let couleur3 = -1;


        for (let i = 0; i <= tabCouleur.length; i++) {
            //alert(tabCouleur[i]);
            if (tabCouleur[i] === 'blonde') {

                couleur += 1;
            }
            else if (tabCouleur[i] === 'brune') {
                couleur1 += 1;
            }
            else if (tabCouleur[i] === 'blanche') {
                couleur2 += 1;
            }
            else {
                couleur3 += 1;
            }
        }
        tabcoul.push(couleur);
        tabcoul.push(couleur1);
        tabcoul.push(couleur2);
        tabcoul.push(couleur3);
    }
    coul();

    // CALCULE CONSO PAR MARQUE
    var tabBrass = [];
    var tabConso = [];
    const transfo = () => {
        let tabbra = 0;
        let tabbra1 = 0;
        let tabbra2 = -1;
        let chif = 0;
        let chif1 = 0;
        let chif2 = 0;


        for (let i = 0; i <= tabBrasserie.length; i++) {
            if (tabBrasserie[i] === 'Heineken') {
                chif += tab[i];
                tabbra += 1;
            }
            else if (tabBrasserie[i] === 'Carlsberg') {
                chif1 += tab[i];
                tabbra1 += 1;
            }
            else {
                chif2 += tab[i];
                tabbra2 += 1;
            }
        }
        tabBrass.push(tabbra);
        tabBrass.push(tabbra1);
        tabBrass.push(tabbra2);
        tabConso.push(chif);
        tabConso.push(chif1);
        tabConso.push(920);
    }
    transfo();



    // FONCTION ON REMPLIS LES DONNES POUR CHART
    const truc = () => {
        for (let i = 0; i < tab.length; i++) {
            datas.datasets[0].data[i] = tab[i];
        }
    }
    // FONCTION ON REMPLIS LES DONNES POUR CHART
    const truc2 = () => {
        for (let i = 0; i < tabBiere.length; i++) {
            datas.labels[i] = tabBiere[i];
        }
    }
    // FONCTION ON REMPLIS LES DONNES POUR CHART
    const truc3 = () => {
        for (let i = 0; i < tabDate.length; i++) {
            datasss.labels[i] = tabDate[i] + " " + tabBiere[i];
        }
    }
    // FONCTION ON REMPLIS LES DONNES POUR CHART
    const truc4 = () => {
        for (let i = 0; i < tabConso.length; i++) {
            datass.datasets[0].data[i] = tabConso[i];
        }
    }
    // FONCTION ON REMPLIS LES DONNES POUR CHART
    const truc5 = () => {
        for (let i = 0; i < tabcoul.length; i++) {
            datassss.datasets[0].data[i] = tabcoul[i];
        }
    }

    //OPTION
    const options = {
        maintainAspectRation: false,
    }

    // DONNEE POUR WIDGET NOMBRE DE BIERE CONSOMMEE PAR MARQUE
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
                width: "800px",
                height: "300px",
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
                data: [],
                backgroundColor: ["Orange"],
            }
        ]
    }

    const datassss = {
        labels: ["blonde", "brune", "blanche", 'autre'],
        datasets: [
            {
                width: "100px",
                height: "100px",
                label: "répartition des brasseries par ventes de bières",
                data: [],
                backgroundColor: ["Orange"],
            }
        ]
    }

    // LANCEMENT FONCTION
    truc();
    truc2();
    truc3();
    truc4();
    truc5();





    return (
        <div className="home">

            <div className="productTop">
                <div className="productTopLeft">
                    <span className="productName"> widget 1 : classement</span><br />
                    <span className="productName"> La france consomme en moyenne {chiffres[0]} Litres de bières par an</span><br />
                    <span className="productName"> La france est le {leader[0]} ème leader mondial en terme de production de bières</span><br />

                </div>

                <div className="productTopRight">
                    <span className="productName"> widget 2</span>
                    <div>
                        <Bar data={datas} options={options} />
                    </div>

                </div>
            </div>

            <div className="grand">
                <div className="productBottom">
                    <div className="ajust" >
                        <Line data={datasss} options={options} />
                    </div>

                </div>

            </div>



            <div className="widget">

                <div className="productLeft">
                    <div className="productTopLeft2">
                        <div className="ajustement">
                            <Doughnut data={datass} options={options} />
                        </div>
                    </div>

                    <div className="productBottomLeft">
                        <div className="ajustement">
                            <Pie data={datassss} options={options} />
                        </div>
                    </div>
                </div>

                <div className="productRight">
                    <span className="productName"> widget 6</span>
                </div>

            </div>



        </div >
    );

};

export default Home;