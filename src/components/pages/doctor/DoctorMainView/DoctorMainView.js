
import React from 'react';

import MainLayoutContainer from '../../../layouts/MainLayoutContainer/MainLayoutContainer';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckAccessAllowed from '../common/useCheckAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorMainView = () => {
    if (!useCheckAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayoutContainer header={<DoctorAdminHdrView />}>
        </MainLayoutContainer>
    )
}

export default DoctorMainView;