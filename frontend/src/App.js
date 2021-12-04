import React from 'react'
import "./App.css";


import Sidebar from "./component/sidebar/Sidebar";
import Navbar from "./component/navbar/Navbar";


import Home from "./pages/home/Home";
import Home2 from "./pages/home/Home2";

import Beer from "./component/myapi/Myapi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container">

        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home2">
            <Home2 />
          </Route>

          <Route path="/beer">
            <Beer />
          </Route>



        </Switch>
      </div>
    </Router>
  );
}

export default App;