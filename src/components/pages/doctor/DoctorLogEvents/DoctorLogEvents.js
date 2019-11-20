// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowedMsg from '../../common/AccessNotAllowedMsg/AccessNotAllowedMsg';

const DoctorLogEvents = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowedMsg/>
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <h1>Doctor Events Page</h1>
        </MainLayout>
    );
}

export default DoctorLogEvents;