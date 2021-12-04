import React from 'react';
import "./chart.css";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";

const data = {
    labels: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
    datasets: [
        {
            width: "400px",
            height: "200px",
            label: "Couleurs préférés en France",
            data: ["23", "20", "15", "32", "18", "9"],
            backgroundColor: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
        }
    ]
}

/* const options = {
    maintainAspectRation: false,
} */

const Chart = () => {

    return (
        <div className="beer">
            <h1>salut</h1>
            <div className="container">
                <div className="card">
                    <Bar data={data} />
                </div>
                <div className="card">
                    <Line data={data} />
                </div>
                <div className="card">
                    <Doughnut data={data} />
                </div>
                <div className="card">
                    <Pie data={data} />
                </div>


            </div>

        </div>

    );

};

export default Chart;