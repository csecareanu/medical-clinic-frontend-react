import React, { useEffect, useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLoginView.module.css';
import LoginExistingAccount from '../common/LoginExistingAccount/LoginExistingAccount';
import CreatePatientAccount from '../common/CreatePatientAccount/CreatePatientAccount';
import Button, { ButtonType } from '../../../UI/Button/Button';
import FormControl from '../../../UI/FormControl/FormControl';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import UIStateContext from '../../../UIState/UIState-context';

const onComponentLoaded = () => {
    // make the top of the window visible if the page is scrolled
    window.scrollTo(0, 0);
}

const onComponentUnloaded = () => {
}

const onCancelLogin = (uiStateContext) => {
    uiStateContext.setDisplayLoginComponent(false)
}

const onLoginSucceeded = (uiStateContext) => {
    uiStateContext.setDisplayLoginComponent(false);
}

const useEffectSetup = () => {
    useEffect( () => {
        onComponentLoaded();
        return () => {
            onComponentUnloaded();
        }
    }, []);
}

const UserLoginView = () => {
    const uiStateContext = useContext(UIStateContext);
    useEffectSetup();

    const createAccountText = <FormattedMessage id="label_no_account_create_one" 
                                    defaultMessage={"If you don't have an account create one"}/>

    return (
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={classes.Login}>
                <div className={classes.LoginContent}>
                    <div className={classes.CancelButton}>
                        <Button 
                            type={ButtonType.DANGER} 
                            onClick={ () => {onCancelLogin(uiStateContext)} }
                        >
                            <FormattedMessage id="cancel" defaultMessage={'Cancel'}/>
                        </Button>
                    </div>
                    <FormControl.HorizontalSep repeat='2'/>

                    <LoginExistingAccount
                        onLoginSucceeded={ () => onLoginSucceeded(uiStateContext) }
                    />
                    <FormControl.HorizontalSep repeat='10'/>

                    <FormControl.Group name={createAccountText} stressedName>
                        <FormControl.HorizontalSep repeat='2'/>
                        <CreatePatientAccount
                            onAccountCreated={ () => onLoginSucceeded(uiStateContext) }
                        />
                    </FormControl.Group>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UserLoginView;