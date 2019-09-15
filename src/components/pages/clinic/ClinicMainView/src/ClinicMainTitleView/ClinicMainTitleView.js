import React from 'react';

import classes from './ClinicMainTitleView.module.css';


export default (props) => (
    <h1 className={classes.Title}>
         {props.text}          
    </h1>
);
