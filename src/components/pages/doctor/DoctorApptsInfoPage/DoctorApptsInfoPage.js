// @flow

import React from 'react';

import {PageHeaderType}  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCanAccessDoctorContent from '../../../shared/useCanAccessDoctorContent';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const DoctorApptsInfoPage = () => {
    if (!useCanAccessDoctorContent()) {
        return <NotificationMessage typeAccessNotAllowed />;
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <UnderConstruction title="Doctor Appointments Info Page" />
        </MainLayout>
        );
}

export default DoctorApptsInfoPage;