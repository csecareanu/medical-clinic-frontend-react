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
        (containerData) => (
            <ClinicMenuView 
                userAuthStatus={containerData.userAuthStatus}
                onItemSelect={ (itemType: number) => {
                    containerData.onClinicItemSelect(itemType);
                    if (props.onItemSelect) {
                        props.onItemSelect();
                    }}}
            />
        )
    }
    </NavContainer>
)

export default ClinicMenu;