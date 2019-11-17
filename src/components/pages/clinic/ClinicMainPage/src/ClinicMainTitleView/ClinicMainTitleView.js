// @flow

import React from 'react';
import type { FormattedMessage } from 'react-intl';

import classes from './ClinicMainTitleView.module.css';

type Props = {
    text: FormattedMessage;
}
export default (props: Props) => (
    <h1 className={classes.Title}>
         {props.text}          
    </h1>
);
