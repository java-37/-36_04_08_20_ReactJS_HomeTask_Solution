import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./ContactList.module.css";
import Loader from "../loader/Loader";
import withContext from "../../context/withContext";
import ApiService from "../../services/ApiService";

class ContactList extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    ApiService.getAllContacts(this.props.context.token)
      .then(({ contacts }) => {
        this.props.context.updateContacts(contacts);
        this.setState({ ...this.state, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ ...this.state, loading: false });
      });
  }
  render() {
    return (
      <>
        <ul className={classes.ContactList}>
          {this.props.context.contacts.map((v, i) => {
            return (
              <li
                key={i}
                className={v.id === parseInt(this.props.match.params.id) ? classes["ContactList-active"] : ""}
                onClick={() => this.props.history.push(`/contacts/${v.id}`)}
              >
                <h3>{`${v.name} ${v.lastName}`}</h3>
                <h4>{v.phone}</h4>
              </li>
            );
          })}
        </ul>
        {this.state.loading ? <Loader /> : null}
      </>
    );
  }
}
export default withContext(withRouter(ContactList));
