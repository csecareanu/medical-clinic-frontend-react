// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

const SysAdminSpecialties = () => (
    <MainLayout headerType={PageHeaderType.SITE_ADMIN}>
        <UnderConstruction title="Clinic Specialties Page" />
    </MainLayout>
);

export default SysAdminSpecialties;
