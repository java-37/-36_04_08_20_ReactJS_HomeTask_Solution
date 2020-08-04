import React from "react";
import classes from './Header.module.css';

export default props => {
    return (
        <div className={classes.Header}>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/contacts" className="active">Add contact</a></li>
                <li  className={classes["Header-right-btn"]}><a href="/logout">Logout</a></li>
                {/*<li  className={classes["Header-right-btn"]}><a href="/login">Login</a></li>*/}
            </ul>
        </div>
    );
}
