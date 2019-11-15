import React from 'react';

import classes from './ClinicServiceView.module.css';

export default (props) => (
    <div className={classes.ServiceContainer}>
        <img className={classes.Image} src={props.img} alt="" />
        <div className={classes.TitleContainer}>
            <h2 className={classes.Title}>{props.title}</h2>
        </div>
    </div>
);