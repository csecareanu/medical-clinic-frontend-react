// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCanAccessDoctorContent from '../../../shared/useCanAccessDoctorContent';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const DoctorLogEventsPage = () => {
    if (!useCanAccessDoctorContent()) {
        return <NotificationMessage typeAccessNotAllowed />;
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <UnderConstruction title="Doctor Events Log Page" />
        </MainLayout>
    );
}

export default DoctorLogEventsPage;