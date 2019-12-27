// @flow

import * as React from 'react';

import DoctorMainMenuView from './DoctorMainMenuView';
import NavContainer from '../../NavContainer/NavContainer';

type Props = {
    onItemSelect?: () => void
};

const DoctorMenu = (props: Props) => (
    <NavContainer>
    {
        (navigationData) => (
            <DoctorMainMenuView
                userAuthStatus={navigationData.userAuthStatus}
                isUserConnectedToAPatientAccount={navigationData.isUserConnectedToAPatientAccount}
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

export default DoctorMenu;