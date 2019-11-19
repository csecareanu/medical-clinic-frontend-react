import React from 'react';

import classes from './MenuToolbar.module.css';


export default (props) => (
    <div className={classes.Toolbar}>
        {props.children}
    </div>
);