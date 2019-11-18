// @flow

import * as React from 'react';

import { ClinicMenuItemType } from '../../../common/MenuItemTypes';
import ClinicMenuView from './ClinicMenuView';
import MenuContainer from '../MenuContainer/MenuContainer';

type Props = {
    onItemSelect?: () => void
};

const ClinicMenu = (props: Props) => (
    <MenuContainer>
    {
        (containerData) => (
            <ClinicMenuView 
                userAuthStatus={containerData.userAuthStatus}
                onItemSelect={ (itemType: ClinicMenuItemType) => {
                    containerData.onClinicMenuItemSelect(itemType);
                    if (props.onItemSelect) {
                        props.onItemSelect();
                    }}}
            />
        )
    }
    </MenuContainer>
)

export default ClinicMenu;