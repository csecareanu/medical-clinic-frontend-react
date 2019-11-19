// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../common/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import useCheckUserAccessAllowed from '../common/useCheckUserAccessAllowed';
import AccessNotAllowed from '../../common/AccessNotAllowed/AccessNotAllowed';

const DoctorMain = () => {
    if (!useCheckUserAccessAllowed()) {
        return <AccessNotAllowed/>
    }
    return (
        <MainLayout headerType={PageHeaderType.DOCTOR}>
            <div></div>
        </MainLayout>
    )
}

export default DoctorMain;