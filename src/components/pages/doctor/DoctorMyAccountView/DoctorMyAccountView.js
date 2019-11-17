
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckAccessAllowed from '../common/useCheckAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorMyAccountView = () => {
    if (!useCheckAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout header={<DoctorAdminHdrView />}>
            <h1>Doctor Account Page</h1>
        </MainLayout>
    );
}


export default DoctorMyAccountView;