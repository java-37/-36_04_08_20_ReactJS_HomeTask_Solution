import React from "react";
import classes from "./Auth.module.css";
import Loader from "../loader/Loader";
import ApiService from "../../services/ApiService";
import withContext from "../../context/withContext";

class Auth extends React.Component {
  state = {
    loading: false,
    error:null,
    email:'',
    password:''
  };

  registration = () => {
    this.setState({...this.state,loading:true,error:null});
    ApiService.registration(this.state.email,this.state.password)
    .then(({token}) => {
        this.props.context.updateToken(token);
        this.props.history.push("/contacts");
    }).catch(({message}) => {
        this.setState({...this.state,error:message,loading:false})
    });
  }

  login = () => {
    this.setState({...this.state,loading:true,error:null});
    ApiService.login(this.state.email,this.state.password)
    .then(({token}) => {
        this.props.context.updateToken(token);
        this.props.history.push("/contacts");
    }).catch(({message}) => {
        this.setState({...this.state,error:message,loading:false})
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <h2>Registration or login</h2>
        {this.state.error ? <div className={classes["Auth-alert"]}>{this.state.error}</div> : null}
        <form action="#">
          <input 
          type="text" 
          placeholder="Type email"
          value={this.state.email}
          onChange={e => this.setState({...this.state,email:e.target.value})} 
          />
          <input 
          type="text" 
          placeholder="Type password" 
          value={this.state.password}
          onChange={e => this.setState({...this.state,password:e.target.value})}
          />
          <div>
            <button 
            className={classes["Auth-regbtn"]}
            onClick={e => {
                e.preventDefault();
                this.registration();
            }}
            >Registration</button>
            <button 
            className={classes["Auth-loginbtn"]}
            onClick={e => {
                e.preventDefault();
                this.login();
            }}
            >Login</button>
          </div>
        </form>
        {this.state.loading ? <Loader /> : null}
      </div>
    );
  }
}

export default withContext(Auth);
