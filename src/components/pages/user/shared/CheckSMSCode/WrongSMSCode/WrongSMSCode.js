// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './WrongSMSCode.module.css';
import Button, { ButtonType } from '../../../../../UI/Button/Button';
import FormControl from '../../../../../UI/FormControl/FormControl';


type Props = {
    onClose: () => void
}

const WrongSMSCode = (props: Props) => {
    return (
        <div className={classes.WrongCode}>
            <div className={classes.Message}>
                <FormattedMessage id="pages.user.check-sms-code.wrong-sms-code.invalid-code" />

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

export default WrongSMSCode;