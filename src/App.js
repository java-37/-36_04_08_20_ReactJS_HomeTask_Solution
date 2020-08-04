import React from 'react';
import {Switch,Route} from 'react-router-dom';
import classes from './App.module.css';
import withContext from './context/withContext';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Auth from "./components/auth/Auth";

function App(props) {
  return (
    <div className={classes.App}>
      <div className={classes['App-container']}>
          <Header></Header>
          <hr/>
          <Switch>
            <Route path="/" exact render={()=> <h2>Home</h2>} />
            <Route path="/about" render={()=> <h2>Aubout</h2>} />
            {
              props.context.token ?
              <Route path="/contacts" component={Main}/>
              :
              <Route path="/login" component={Auth} />
            }
          </Switch>
      </div>
    </div>
  );
}

export default withContext(App);
