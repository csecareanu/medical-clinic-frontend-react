

import React from 'react';

import MainLayoutView from '../../../layouts/MainLayoutView/MainLayoutView';
import DoctorAdminHdrView from '../../../headers/DoctorAdminHdrView/DoctorAdminHdrView';
import useCheckAccessAllowed from '../common/useCheckAccessAllowed';
import AccessNotAllowedView from '../../common/AccessNotAllowedView/AccessNotAllowedView';

const DoctorLogEventsView = () => {
    if (!useCheckAccessAllowed()) {
        return <AccessNotAllowedView/>
    }
    return (
        <MainLayoutView header={<DoctorAdminHdrView />}>
            <h1>Doctor Events Page</h1>
        </MainLayoutView>
    );
}

export default DoctorLogEventsView;