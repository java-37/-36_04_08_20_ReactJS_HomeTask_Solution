import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import classes from "./Header.module.css";
import withContext from "../../context/withContext";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        {props.context.token ? (
          <>
            <li>
              <NavLink to="/contacts" exact>Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/contacts/add">Add contact</NavLink>
            </li>
            <li className={classes["Header-right-btn"]}>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  props.context.logout();
                  props.history.push("/login");
                }}
              >
                Logout
              </a>
            </li>
          </>
        ) : (
          <li className={classes["Header-right-btn"]}>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withContext(withRouter(Header));
