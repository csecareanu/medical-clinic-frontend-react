// @flow

import React from 'react';
import SiteAdminMenuView from '../../menus/SiteAdminMenuView/SiteAdminMenuView';

const SiteAdminHeader = () => (
    <header>
        <h1>Admin Header</h1>
        <nav>
            <SiteAdminMenuView />
        </nav>
    </header>
);

export default SiteAdminHeader;