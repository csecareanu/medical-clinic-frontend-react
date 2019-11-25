// @flow

import React from 'react';

import classes from './UnderConstruction.module.css';
import image from '../../../../static/images/under_construction.jpg';

type Props = {
    title: string
}

const UnderConstruction = (props: Props) => (
    <div className={classes.UnderConstruction}>
        <h1>{props.title}</h1>
        <h2>(under construction)</h2>
        <img className={classes.Image} src={image} alt=""/>
    </div>
);

export default UnderConstruction;