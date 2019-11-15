
import React from 'react';

import MainLayoutContainer from '../../../layouts/MainLayoutContainer/MainLayoutContainer';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckAccessAllowed from '../common/useCheckAccessAllowed';
import AccessNotAllowedView from '../../common/AccessNotAllowedView/AccessNotAllowedView';

const DoctorMyAccountView = () => {
    if (!useCheckAccessAllowed()) {
        return <AccessNotAllowedView/>
    }
    return (
        <MainLayoutContainer header={<DoctorAdminHdrView />}>
            <h1>Doctor Account Page</h1>
        </MainLayoutContainer>
    );
}


export default DoctorMyAccountView;