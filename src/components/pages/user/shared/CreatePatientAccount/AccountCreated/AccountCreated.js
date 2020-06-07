// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './AccountCreated.module.css';
import Button, {ButtonType} from '../../../../../UI/Button/Button';
import FormControl from '../../../../../UI/FormControl/FormControl';


type Props = {
    onClose: () => void
}

const AccountCreated = (props: Props) => {
    return (
        <div className={classes.WrongCode}>
            <div className={classes.Message}>
                <FormattedMessage id="pages.user.create-patient-account.account-created.success" />

                <FormControl.HorizontalSep repeat={2} />
            </div>

            <Button 
                type={ButtonType.SUCCESS}
                onClick={ props.onClose }
            >
                <FormattedMessage id="btn-close" />
            </Button>
        </div>
    )
}

export default AccountCreated;