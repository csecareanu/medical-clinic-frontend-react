import React from 'react';

import classes from './MenuToggleToolbarView.module.css';
import MenuToggleButton from '../common/MenuToggleButton/MenuToggleButton';

export default () => (
    <div className={classes.Toolbar}>
        <MenuToggleButton />
    </div>
);