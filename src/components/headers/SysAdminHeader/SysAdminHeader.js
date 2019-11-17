// @flow

import React from 'react';
import SysAdminMenuView from '../../menus/SysAdminMenuView/SysAdminMenuView';

const SysAdminHeader = () => (
    <header>
        <h1>Admin Header</h1>
        <nav>
            <SysAdminMenuView />
        </nav>
    </header>
);

export default SysAdminHeader;