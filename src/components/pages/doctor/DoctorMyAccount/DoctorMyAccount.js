// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowedMsg from '../../common/AccessNotAllowedMsg/AccessNotAllowedMsg';
import UnderConstruction from '../../common/UnderConstruction/UnderConstruction';

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