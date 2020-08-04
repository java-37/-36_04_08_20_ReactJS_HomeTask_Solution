import React from "react";
import classes from "./ContactController.module.css";
import ContactView from "../contact-view/ContactView";
import ContactForm from "../contact-form/ContactForm";

export default props => {
    return (
        <div className={classes.ContactController}>
            <ContactView/>
            <ContactForm/>
        </div>
    );
}
