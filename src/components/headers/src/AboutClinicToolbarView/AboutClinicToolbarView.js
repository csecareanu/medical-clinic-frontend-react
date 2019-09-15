import React from 'react';

import classes from './AboutClinicToolbarView.module.css';
import PhoneToolbarItemView from './src/PhoneToolbarItemView/PhoneToolbarItemView';
import EmailToolbarItemView from './src/EmailToolbarItemView/EmailToolbarItemView';
import BrandLargeToolbarItemView from './src/BrandLargeToolbarItemView/BrandLargeToolbarItemView';
import BrandSmallToolbarItemView from './src/BrandSmallToolbarItemView/BrandSmallToolbarItemView';

export default () => (

    <div className={classes.Toolbar} >
            <div className={classes.LeftItems} >
                <BrandLargeToolbarItemView />
            </div>
            <div className={classes.RightItems}>
                <div className={classes.RightUp}>
                    <PhoneToolbarItemView />
                    <EmailToolbarItemView />
                </div>
                <div className={classes.RightDown}>
                    <BrandSmallToolbarItemView />
                </div>
            </div>
    </div>
);