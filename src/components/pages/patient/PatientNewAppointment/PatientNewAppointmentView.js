// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';

const PatientNewAppointment = () => {
    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <h1>New/Modify Appointment</h1>
        </MainLayout>
    );
}

export default PatientNewAppointment;
