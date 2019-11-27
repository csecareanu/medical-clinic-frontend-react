// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import useCanAccessPatientContent from '../../../shared/useCanAccessPatientContent';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

export default () => {
    if (!useCanAccessPatientContent()) {
        return <AccessNotAllowedMsg/>
    }    
    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <UnderConstruction title="Patient My account Page" />
        </MainLayout>
    )
}
