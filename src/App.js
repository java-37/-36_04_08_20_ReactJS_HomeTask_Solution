import React from 'react';
import classes from './App.module.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Loader from "./components/loader/Loader";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes['App-container']}>
          <Header></Header>
          <hr/>
          {/*<Auth/>*/}
          <Main/>
      </div>
        {/*<Loader/>*/}
    </div>
  );
}

export default App;
