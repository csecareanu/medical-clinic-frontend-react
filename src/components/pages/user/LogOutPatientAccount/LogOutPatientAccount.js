// @flow

import React from 'react';

import NavContainer from '../../../NavContainer/NavContainer';
import { DoctorMenuItem } from '../../../../shared/MenuItemIdentifiers';

type Props = {
    onItemSelect?: () => void
};

const LogOutPatientAccount = (props: Props) => (
    <NavContainer>
    {
        (navigationData) => {
            navigationData.onClinicMenuItemSelect(DoctorMenuItem.LOG_OUT_PATIENT_ACCOUNT);
            if (props.onItemSelect) {
                props.onItemSelect();
            }
        }
    }
    </NavContainer>
);

export default LogOutPatientAccount;