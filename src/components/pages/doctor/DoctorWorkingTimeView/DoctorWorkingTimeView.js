import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorWorkingTimeView = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout header={<DoctorAdminHdrView />}>
            <h1>Working Time Page</h1>
        </MainLayout>
    );
}

 export default DoctorWorkingTimeView;