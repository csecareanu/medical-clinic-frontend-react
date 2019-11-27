// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import useCanAccessSiteAdminContent from '../../../shared/useCanAccessSiteAdminContent';
import AccessNotAllowedMsg from '../../shared/AccessNotAllowedMsg/AccessNotAllowedMsg';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const SiteAdminSpecialties = () => {
    if (!useCanAccessSiteAdminContent()) {
        return <AccessNotAllowedMsg/>
    }    
    return (
        <MainLayout headerType={PageHeaderType.SITE_ADMIN}>
            <UnderConstruction title="Clinic Specialties Page" />
        </MainLayout>
    );
}

export default SiteAdminSpecialties;
