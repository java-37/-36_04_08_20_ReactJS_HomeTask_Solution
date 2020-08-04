import React from "react";
import classes from './Main.module.css';
import ContactList from "../contact-list/ContactList";
import ContactController from "../ContactController/ContactController";

export default props => {
    return (
        <div className={classes.Main}>
            <ContactList/>
            <ContactController/>
        </div>
    );
}
