// @flow

import React from 'react';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import useCanAccessSiteAdminContent from '../../../shared/useCanAccessSiteAdminContent';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

export default () => {
    if (!useCanAccessSiteAdminContent()) {
        return <NotificationMessage typeAccessNotAllowed />;
    }    
    return (
        <MainLayout headerType={PageHeaderType.SITE_ADMIN}>
            <UnderConstruction title="Sys Admin Doctor to Services Page" />
        </MainLayout>
    );
}