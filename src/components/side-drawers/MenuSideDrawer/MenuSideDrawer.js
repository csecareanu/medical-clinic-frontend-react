// @flow

import React from 'react';

import MenuSideDrawerContainer from './MenuSideDrawerContainer';
import MenuSideDrawerView from './MenuSideDrawerView';

/**
 * Displays a menu in a sidebar. The component is visible only on small screens.
 * The small screen CSS is defined in the 'src/common.module.css' file.
 */
const MenuSideDrawer = () => (
    <MenuSideDrawerContainer>
        {
            (containerData) => (
                containerData.displayMenuSideDrawerComponent
                    ? (
                        <MenuSideDrawerView
                            onClose={containerData.onCloseMenuSideDrawer}
                            userAuthStatus={containerData.userAuthStatus}
                        />
                    )
                    : null
            )
        }
    </MenuSideDrawerContainer>
)

export default MenuSideDrawer;
