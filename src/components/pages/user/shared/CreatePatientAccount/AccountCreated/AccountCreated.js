// @flow

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './AccountCreated.module.css';
import Button, { ButtonType } from '../../../../../UI/Button/Button';
import FormControl from '../../../../../UI/FormControl/FormControl';

const onComponentLoaded = () => {
    // make the top of the window visible if the page is scrolled
    window.scrollTo(0, 0);
}

const onComponentUnloaded = () => {
}

const useEffectSetup = () => {
    useEffect( () => {
        onComponentLoaded();
        return () => {
            onComponentUnloaded();
        }
    }, []);
}

type Props = {
    onClose: () => void
}

const AccountCreated = (props: Props) => {
    useEffectSetup();
    return (
        <div className={classes.WrongCode}>
            <div className={classes.Message}>
                <FormattedMessage
                        id="account_created" 
                        defaultMessage={'The account has been created.'}
                />

                <FormControl.HorizontalSep repeat={2} />
            </div>

            <Button 
                type={ButtonType.SUCCESS}
                onClick={ props.onClose }
            >
                <FormattedMessage 
                    id="btn_text_close" 
                    defaultMessage={'Close'}
                />
            </Button>
        </div>
    )
}

export default AccountCreated;