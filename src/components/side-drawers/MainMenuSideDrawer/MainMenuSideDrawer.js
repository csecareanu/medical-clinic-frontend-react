// @flow

import React from 'react';

import MenuSideDrawerContainer from '../MenuSideDrawerContainer/MenuSideDrawerContainer';
import MainMenuSideDrawerView from './MainMenuSideDrawerView';

/**
 * Displays a menu in a sidebar. The component is visible only on small screens.
 * The small screen CSS is defined in the 'src/common.module.css' file.
 */
const MainMenuSideDrawer = () => (
    <MenuSideDrawerContainer>
        {
            (containerData) => (
                containerData.displayMenuSideDrawerModal
                    ? (
                        <MainMenuSideDrawerView
                            onClose={containerData.onCloseMenuSideDrawer}
                            userAuthenticationStatus={containerData.userAuthenticationStatus}
                        />
                    )
                    : null
            )
        }
    </MenuSideDrawerContainer>
)

export default MainMenuSideDrawer;
