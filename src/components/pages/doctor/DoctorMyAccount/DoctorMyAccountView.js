// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './DoctorMyAccountView.module.css';
import { PageHeaderType }  from '../../../../shared/PageHeaderType';
import { UserAuthType } from '../../../../shared/UserAuthType';
import { UserMenuItem }  from '../../../../shared/MenuItemIdentifiers';
import LinkButton, { LinkButtonType } from '../../../UI/LinkButton/LinkButton';
import MainLayout from '../../../layouts/MainLayout/MainLayout';
import NotificationMessage from '../../shared/NotificationMessage/NotificationMessage';
import UnderConstruction from '../../shared/UnderConstruction/UnderConstruction';

type Props = {
    userAuthStatus: number | Symbol,
    onNavigationItemSelect: (itemType: number | Symbol) => void 
}

const DoctorMyAccountView = (props: Props) => {
    if (props.userAuthStatus !== UserAuthType.DOCTOR) {
        return <NotificationMessage typeAccessNotAllowed />;
    }

    return (
        <MainLayout headerType={PageHeaderType.MAIN}>
            <div className={classes.MyAccount}>
                <LinkButton 
                    type={LinkButtonType.DANGER}
                    onClick={() => {props.onNavigationItemSelect(UserMenuItem.LOGOUT);}}
                >
                    <FormattedMessage id="menu_logout" defaultMessage={'Logout'}/>
                </LinkButton>

                <div style={{width: '100%', align: 'center'}}>
                    <UnderConstruction title="Doctor My Account Page" />
                </div>
            </div>
        </MainLayout>
    );
}


export default DoctorMyAccountView;