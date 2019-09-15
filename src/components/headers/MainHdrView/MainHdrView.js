import React from 'react';

import classes from './MainHdrView.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MenuToolbarView from '../src/MenuToolbarView/MenuToolbarView';
import MainImageView from '../src/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../src/AboutClinicToolbarView/AboutClinicToolbarView';
import PatientToolbarView from '../src/PatientToolbarView/PatientToolbarView';


export default () => (
    <header className={classes.Header}>
        <nav>
            <AboutClinicToolbarView />
            <PatientToolbarView />
            <MenuToolbarView>
                <DoctorMenuView />
                <ClinicMenuView />
            </MenuToolbarView>
            <MainImageView src={imgMain} />
        </nav>
    </header>
);