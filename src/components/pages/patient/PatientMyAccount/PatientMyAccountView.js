// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import { UserAuthType } from '../../../../shared/UserAuthType';
import { UserMenuItem }  from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

type Props = {
    userAuthStatus: number | Symbol,
    isUserConnectedToAPatientAccount: boolean,
    onNavigationItemSelect: (itemType: number | Symbol) => void 
}

const PatientAccountView = (props: Props) => {

    // Only a patient or a doctor connected to a patient account can see this page
    if (props.userAuthStatus !== UserAuthType.PATIENT) {

        if (props.userAuthStatus !== UserAuthType.DOCTOR) {
            return <NotificationMessage typeAccessNotAllowed />;
        }

        if (!props.isUserConnectedToAPatientAccount) {
            return <NotificationMessage typeNotConnectedToPatientAccount />;
        }
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <LinkButton 
                type={LinkButtonType.DANGER}
                onClick={() => {props.onNavigationItemSelect(UserMenuItem.LOGOUT);}}
            >
                <FormattedMessage id="menu_logout" defaultMessage={'LOGOUT'}/>
            </LinkButton>

            <UnderConstruction title="Patient My account Page" />
        </MainLayout>
    )
}

export default PatientAccountView;