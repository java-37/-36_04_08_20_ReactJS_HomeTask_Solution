import React from "react";
import classes from "./ContactView.module.css";

export default ({ contact }) => {
  return (
    <div className={classes.ContactView}>
      <div className={classes["ContactView-top"]}>
        <button className={classes["ContactView-editbtn"]}>Edit</button>
        <button className={classes["ContactView-rmbtn"]}>Remove</button>
      </div>
      <h2>{`${contact.name} ${contact.lastName}`}</h2>
      <h3>{contact.email}</h3>
      <h3>{contact.phone}</h3>
      <h3>{contact.address}</h3>
      <p>{contact.description}</p>
    </div>
  );
};
