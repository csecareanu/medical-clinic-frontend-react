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
    onClinicItemSelect: (itemId: number | Symbol) => void
}

const NotificationMessageView = (props: Props) => {

    let message = null;

    if (props.typeAccessNotAllowed) {
        message = ( 
            <FormattedMessage 
                id="not_allowed_to_access_resource" 
                defaultMessage={'You are not allowed to access this resource.'}
        /> );
    } else if (props.typeNeedAuthentication) {
        message = ( 
            <FormattedMessage 
                id="user_need_to_authenticate" 
                defaultMessage={'You need to authenticate first.'}
        /> );
    } else if (props.typeNotConnectedToPatientAccount) {
        message = ( 
            <FormattedMessage 
                id="user_not_connected_to_patient_account" 
                defaultMessage={'You are not connected to a patient account.'}
        /> );        
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
                    props.onClinicItemSelect(ClinicMenuItem.HOME)
                }}
            >
                <FormattedMessage 
                    id="navigate_to_home_page" 
                    defaultMessage={'Navigate to home page'}
                />
            </Button>
        </div>
    );
}

export default NotificationMessageView;