// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './PatientMyAccountView.module.css';
import {PageHeaderType}  from '../../../../shared/PageHeaderType';
import {UserAuthType} from '../../../../shared/UserAuthType';
import {UserMenuItem}  from '../../../../shared/MenuItemIdentifiers';
import LinkButton, {LinkButtonType} from '../../../UI/LinkButton/LinkButton';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

type Props = {
    userAuthenticationStatus: number | Symbol,
    isUserConnectedToAPatientAccount: boolean,
    onNavigationItemSelect: (itemType: number | Symbol) => void 
}

const PatientAccountView = (props: Props) => {

    // Only a patient or a doctor connected to a patient account can see this page
    if (props.userAuthenticationStatus !== UserAuthType.PATIENT) {

        if (props.userAuthenticationStatus !== UserAuthType.DOCTOR) {
            return <NotificationMessage typeAccessNotAllowed />;
        }

        if (!props.isUserConnectedToAPatientAccount) {
            return <NotificationMessage typeNotConnectedToPatientAccount />;
        }
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.MyAccount}>
                <LinkButton 
                    type={LinkButtonType.DANGER}
                    onClick={() => {props.onNavigationItemSelect(UserMenuItem.LOGOUT);}}
                >
                    <FormattedMessage id="btn-logout" />
                </LinkButton>

                <div style={{width: '100%', align: 'center'}}>
                    <UnderConstruction title="Patient My account Page" />
                </div>
            </div>
        </MainLayout>
    )
}

export default PatientAccountView;