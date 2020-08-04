import React from 'react';
import classes from './Loader.module.css';

export default props => {
    return (
        <div className={classes.Backdrop}>
            <div className={classes.Modal}>
                <h2>Updating data</h2>
                <div className={classes.Ring}/>
            </div>
        </div>
    )
}
