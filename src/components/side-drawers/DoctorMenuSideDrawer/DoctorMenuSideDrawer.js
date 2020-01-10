// @flow

import React from 'react';

import MenuSideDrawerContainer from '../MenuSideDrawerContainer/MenuSideDrawerContainer';
import DoctorMenuSideDrawerView from './DoctorMenuSideDrawerView';

/**
 * Displays in a sidebar a menu containing doctor user specific items. 
 * The component is visible only on small screens.
 */
const DoctorMenuSideDrawer = () => (
    <MenuSideDrawerContainer>
        {
            (containerData) => (
                containerData.displayMenuSideDrawerModal
                    ? (
                        <DoctorMenuSideDrawerView
                            onClose={containerData.onCloseMenuSideDrawer}
                            userAuthenticationStatus={containerData.userAuthenticationStatus}
                        />
                    )
                    : null
            )
        }
    </MenuSideDrawerContainer>
)

export default DoctorMenuSideDrawer;
