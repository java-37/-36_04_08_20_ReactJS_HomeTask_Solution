import React from "react";
import classes from "./ContactController.module.css";
import ContactView from "../contact-view/ContactView";
import ContactForm from "../contact-form/ContactForm";
import { withRouter } from "react-router-dom";
import withContext from "../../context/withContext";

class ContactController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.mode,
    };
  }

  componentDidUpdate(prevProps){
    //   console.log("componentDidUpdate");
    if(this.props.mode !== prevProps.mode){
        this.setState({...this.state, mode:this.props.mode});
    }
  }

  getCurrentView = () => {
    if(this.state.mode === "view" && !this.props.match.params.id){
        return null;
    }
    switch (this.state.mode) {
      case "add":
        return <ContactForm />;
      case "view":
        return (
          <ContactView
            contact={this.props.context.findContactById(
              parseInt(this.props.match.params.id)
            )}
          />
        );
        default: return <div>Default</div>
    }
  };
  render() {
    return (
      <div className={classes.ContactController}>
        {this.getCurrentView()}
      </div>
    );
  }
}

export default withContext(withRouter(ContactController));
