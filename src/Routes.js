import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import Medicines from "./Medicine/Medicines";
import Calendar from "./Calendar/calendar";
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                    <Route path = "/Medicines" component = {Medicines} />
                    <Route path = "/Calendar" component = {Calendar} />
                    
                </Switch>
            </Router>
        )
    }
}
