// @flow

import * as React from 'react';

import ClinicMenuView from './ClinicMenuView';
import NavContainer from '../../NavContainer/NavContainer';

type Props = {
    onItemSelect?: () => void
};

const ClinicMenu = (props: Props) => (
    <NavContainer>
    {
        (navigationData) => (
            <ClinicMenuView 
                userAuthenticationStatus={navigationData.userAuthenticationStatus}
                onItemSelect={ (itemType: number) => {
                    navigationData.onClinicMenuItemSelect(itemType);
                    if (props.onItemSelect) {
                        props.onItemSelect();
                    }}}
            />
        )
    }
    </NavContainer>
)

export default ClinicMenu;