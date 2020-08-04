import React from "react";
import classes from "./ContactForm.module.css";

export default props => {
    return (
        <form action="#" className={classes.Form} onSubmit={e => {
            e.preventDefault();
        }}>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" placeholder="Lastname"/>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Phone"/>
            <input type="text" placeholder="Address"/>
            <textarea  placeholder="Description"/>
            <button>Save</button>
        </form>
    );
}
