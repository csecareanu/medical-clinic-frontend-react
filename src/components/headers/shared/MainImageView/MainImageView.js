// @flow

import React from 'react';

import classes from './MainImageView.module.css';

type Props = {
    src: string
}

export default (props: Props) => (
    <img className={classes.Image} src={props.src} alt=""/>
);