import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './BrandLarge.module.css';
import imgBrand from '../../../static/images/brand.jpg';

export default () => (
    <div className={classes.Brand}>
        <img  src={imgBrand} alt="brand"/>
        <div className={classes.ClinicIncentive}>
            <FormattedMessage id="ui.brand-large.clinic-incentive" />
        </div>
    </div>
);