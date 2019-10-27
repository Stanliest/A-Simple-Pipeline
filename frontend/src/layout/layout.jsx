import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { PageHeader } from "react-bootstrap";
import NavBar from "../components/NavBar";

import Main from '../views/MainPage/MainPage.jsx';
import Reference from "../views/Reference/Reference.jsx";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
        <PageHeader>A Simple Pipeline <small>Travis, AWS S3</small></PageHeader>
        <div>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/reference' component={Reference} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Layout;