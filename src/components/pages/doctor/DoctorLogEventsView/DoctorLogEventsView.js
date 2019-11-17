

import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorLogEventsView = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout header={<DoctorAdminHdrView />}>
            <h1>Doctor Events Page</h1>
        </MainLayout>
    );
}

export default DoctorLogEventsView;