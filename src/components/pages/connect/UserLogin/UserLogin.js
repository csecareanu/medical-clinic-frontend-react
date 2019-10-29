import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLogin.module.css';
import Button, { ButtonType } from '../../../UI/Button/Button';
import BirthdayElement from '../common/BirthdayElement/BirthdayElement';
import Input from '../../../UI/Input/Input'

class UserLogin extends React.Component {
    render () {

        return (
            <div className={classes.UserLogin}>
                <Button type={ButtonType.DANGER}>
                    <FormattedMessage id="connect_doctors" defaultMessage={'Cancel'}/>
                </Button>

                <Input 
                    elementType="only_label"
                    label= "Data nasterii: "
                >
                </Input>              
                <BirthdayElement></BirthdayElement>
            </div>
        );
    }
}

export default UserLogin;