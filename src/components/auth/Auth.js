import React from "react";
import classes from "./Auth.module.css";


export default props => {
    return (
        <div className={classes.Auth}>
            <h2>Registration or login</h2>
            <div className={classes["Auth-alert"]}>Error</div>
            <form action="#">
                <input type="text" placeholder="Type email"/>
                <input type="text" placeholder="Type password"/>
                <div>
                    <button className={classes["Auth-regbtn"]}>Registration</button>
                    <button className={classes["Auth-loginbtn"]}>Login</button>
                </div>
            </form>
        </div>
    )
}
