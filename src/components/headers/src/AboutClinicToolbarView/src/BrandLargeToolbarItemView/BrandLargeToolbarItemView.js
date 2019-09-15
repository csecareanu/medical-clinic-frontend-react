import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './BrandLargeToolbarItemView.module.css';
import imgBrand from '../../../../../../static/images/brand.jpg';

export default () => (
    <div>
        <img  src={imgBrand} alt="brand"/>
        <div className={classes.ClinicIncentive}>
            <FormattedMessage id="clinic_incentive" defaultMessage={'Traditional Chinese Medicine'}/>
        </div>
    </div>
);