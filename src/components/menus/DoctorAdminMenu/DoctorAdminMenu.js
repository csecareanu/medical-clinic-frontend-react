// @flow

import * as React from 'react';

import DoctorAdminMenuView from './DoctorAdminMenuView';
import NavContainer from '../../NavContainer/NavContainer';

type Props = {
    onItemSelect?: () => void
};

const DoctorAdminMenu = (props: Props) => (
    <NavContainer>
    {
        (navigationData) => (
            <DoctorAdminMenuView
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

export default DoctorAdminMenu;