import React from "react";
import classes from "./ContactList.module.css";

export default props => {
    return (
        <ul className={classes.ContactList}>
            {
                getRandomContacts().map((v,i) => {
                    return (
                        <li key={i} className={i === 2 ? classes["ContactList-active"] : ""}>
                            <h3>{v.name}</h3>
                            <h4>{v.phone}</h4>
                        </li>
                    );
                })
            }


        </ul>
    );
}


function getRandomContacts(){
    const arr = [];
    for (let i = 0; i < 100; i++){
        arr.push({
            name:`John ${i}`,
            phone: `05455566${i}`
        })
    }
    return arr;
}
