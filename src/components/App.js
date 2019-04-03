import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import routes from "../routes";

function App(props) {
  return (
      <BrowserRouter>
        <>
          {props.header.showHeader && <Header />}
    <div className="customContainer">
          <Switch>
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.id}
                exact={route.exact && true}
              />
            ))}
          </Switch>
    </div>
          {props.header.showFooter && <Footer />}
        </>
      </BrowserRouter>
  );
}

export default connect(({ header }) => ({ header }))(App);
