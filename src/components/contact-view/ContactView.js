import React from 'react';
import classes from "./ContactView.module.css";

export default props => {
    return (
        <div className={classes.ContactView}>
            <div className={classes["ContactView-top"]}>
                <button className={classes["ContactView-editbtn"]}>Edit</button>
                <button className={classes["ContactView-rmbtn"]}>Remove</button>
            </div>
            <h2>John Doe</h2>
            <h3>john@mail.com</h3>
            <h3>0545557678</h3>
            <h3>Tel Aviv</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quae!</p>
        </div>
    );
}
