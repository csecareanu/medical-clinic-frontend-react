// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './NotificationMessageView.module.css';
import { ClinicMenuItem } from '../../../../shared/MenuItemIdentifiers';
import Button, { ButtonType } from '../../../UI/Button/Button';

type Props = {
    typeAccessNotAllowed?: boolean,
    typeNeedAuthentication?: boolean,
    typeNotConnectedToPatientAccount?: boolean,
    onClinicMenuItemSelect: (itemId: number | Symbol) => void
}

const NotificationMessageView = (props: Props) => {

    let message = null;

    if (props.typeAccessNotAllowed) {
        message = 
            <FormattedMessage id="pages.notification-message.not-allowed-to-access-resource" />;
    } else if (props.typeNeedAuthentication) {
        message = 
            <FormattedMessage id="pages.notification-message.user-need-to-authenticate" />;
    } else if (props.typeNotConnectedToPatientAccount) {
        message =
            <FormattedMessage 
               id="pages.notification-message.user-not-connected-to-patient-account" 
            />;
    } else { 
        console.log("NotificationMessage. Unknown message notification message type. Props: ", 
                props);
    }

    return (
        <div className={classes.NowAllowedContent}>
            <h3>
                {message}
            </h3>
            <Button 
                type={ButtonType.SUCCESS}
                onClick={ () => { 
                    props.onClinicMenuItemSelect(ClinicMenuItem.HOME)
                }}
            >
                <FormattedMessage id="pages.notification-message.navigate-to-home-page" />
            </Button>
        </div>
    );
}

export default NotificationMessageView;