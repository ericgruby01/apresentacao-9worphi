import React from "react";
import Favicon from 'react-favicon'
import { HashRouter, Switch, Route } from "react-router-dom";

/**
 * Components
 */
import Menu from "../components/Menu";
import Footer from "../components/Footer";

/**
 * Pages
 */
import Home from "../routes/pages/Home";
import Team from "../routes/pages/Team";
import Member from "../routes/pages/Member";
import Projects from "../routes/pages/Projects";
import Project from "../routes/pages/Project";
import Page404 from "../routes/pages/Page404";

import imgFavicon from '../images/favicon.png'

export default function () {
  return (
    <HashRouter>
      <Favicon url={imgFavicon}/>
      <Menu />
      <div id="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/team" exact component={Team} />
          <Route path="/team/member/:id" exact component={Member} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/project/:id" exact component={Project} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
      <Footer/>
    </HashRouter>
  );
}
