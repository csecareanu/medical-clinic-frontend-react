import React from 'react';
import PatientMainMenuView from '../../menus/PatientMainMenuView/PatientMainMenuView';
import DoctorMainMenuView from '../../menus/DoctorMainMenuView/DoctorMainMenuView';

export default () => (
    <header>
        <h1>Main Header</h1>
        <nav>
            <DoctorMainMenuView />
            <PatientMainMenuView />
        </nav>
    </header>
);