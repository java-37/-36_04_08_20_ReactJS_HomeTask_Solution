import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Main.module.css";
import ContactList from "../contact-list/ContactList";
import ContactController from "../contact-controller/ContactController";

export default (props) => {
  return (
    <div className={classes.Main}>
      <Switch>
        <Route path="/contacts" exact component={ContactList} />
        <Route
          path="/contacts/add"
          render={() => {
            return (
              <>
                <ContactList />
                <ContactController mode="add" />
              </>
            );
          }}
        />
        <Route
          path="/contacts/:id"
          render={() => {
            return (
              <>
                <ContactList />
                <ContactController mode="view" />
              </>
            );
          }}
        />
      </Switch>
    </div>
  );
};
