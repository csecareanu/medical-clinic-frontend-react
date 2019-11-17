// @flow

import React from 'react';
import typeof { FormattedMessage } from 'react-intl';

import classes from './ClinicServiceView.module.css';

type Props = {
    img: string,
    title: FormattedMessage
}
export default (props: Props) => (
    <div className={classes.ServiceContainer}>
        <img className={classes.Image} src={props.img} alt="" />
        <div className={classes.TitleContainer}>
            <h2 className={classes.Title}>{props.title}</h2>
        </div>
    </div>
);