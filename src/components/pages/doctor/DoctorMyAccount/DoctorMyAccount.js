// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCheckUserAccessAllowed from '../shared/useCheckUserAccessAllowed';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const DoctorMyAccount = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowedMsg/>
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <UnderConstruction title="Doctor Account Page" />
        </MainLayout>
    );
}


export default DoctorMyAccount;