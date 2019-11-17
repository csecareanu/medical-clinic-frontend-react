
import React from 'react';

import MainLayout from '../../../layouts/MainLayout/MainLayout';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckAccessAllowed from '../common/useCheckAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorMainView = () => {
    if (!useCheckAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout header={<DoctorAdminHdrView />}>
        </MainLayout>
    )
}

export default DoctorMainView;