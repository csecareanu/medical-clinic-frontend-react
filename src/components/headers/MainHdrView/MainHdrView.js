import React from 'react';

import classes from './MainHdrView.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserAccountToolbarView from '../../toolbars/UserAccountToolbarView/UserAccountToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';


export default () => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbarView />
            <div className={classes.ToolbarDistance} />
            <UserAccountToolbarView />
            <MenuToolbarView>
                <DoctorMenuView />
                <ClinicMenuView />
            </MenuToolbarView>
            <MainImageView src={imgMain} />
        </nav>
    </header>
);