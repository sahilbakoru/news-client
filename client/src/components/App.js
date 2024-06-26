import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Articles from "./TopArticles/Articles";
import SearchBar from "./Search/SearchBar";
import BusinessArts from "./Business/BusinessArts";
import TechArts from "./Tech/TechArts";
import SportsArts from "./Sports/SportsArts";
import ScienceArts from "./Science/ScienceArts";
import HealthArts from "./Health/HealthArts";
import EntertainmentArts from "./Entertainment/EntertainmentArts";

import About from "./About_and_policy/About";
import Privacy from "./About_and_policy/Privacy";
import Disclamer from "./About_and_policy/Disclamer";
import Contact from "./About_and_policy/Contact";

import UKArticles from "./Uk/UKArticles";
import CANArticles from "./Can/CANArticles";
import AUSArticles from "./Aus/AUSArticles";
import BleacherReportArticles from "./BleacherReport/BleacherReportArticles.js";
import WallStreetArticles from "./WSJ/WallStreetArticles";
import BBCArticles from "./BBCNews/BBCArticles";
import TechCrunchArticles from "./TechCrunch/TechCrunchArticles";
import Summary from "./Summary";
import NotFound from "./NotFound";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Navbar />
            <div className="row top-level">
              <div className="col-md-2">
                <SideBar />
              </div>
              <div className="col-md-10">
                <Switch>
                  <Route exact path="/" component={Articles} />
                  <Route exact path="/search" component={SearchBar} />
                  <Route exact path="/business" component={BusinessArts} />
                  <Route exact path="/health" component={HealthArts} />
                  <Route exact path="/tech" component={TechArts} />
                  <Route exact path="/sports" component={SportsArts} />
                  <Route exact path="/science" component={ScienceArts} />
                  <Route
                    exact
                    path="/entertainment"
                    component={EntertainmentArts}
                  />
                  <Route exact path="/uk" component={UKArticles} />
                  <Route exact path="/can" component={CANArticles} />
                  <Route exact path="/aus" component={AUSArticles} />
                  <Route exact path="/bra" component={BleacherReportArticles} />
                  <Route exact path="/wsj" component={WallStreetArticles} />
                  <Route exact path="/bbc" component={BBCArticles} />
                  <Route exact path="/tc" component={TechCrunchArticles} />
                  <Route exact path="/sum" component={Summary} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/policy" component={Privacy} />
                  <Route exact path="/disclaimer" component={Disclamer} />
                  <Route exact path="/contact" component={Contact} />

                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
