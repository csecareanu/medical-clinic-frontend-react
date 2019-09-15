import React from 'react';

import classes from './MainImageView.module.css';

export default (props) => (
    <img className={classes.Image} src={props.src} alt=""/>
);