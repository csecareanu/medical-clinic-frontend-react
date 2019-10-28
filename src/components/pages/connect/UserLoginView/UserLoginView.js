import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './UserLogin.module.css';
import Button, { ButtonType } from '../../../UI/Button/Button';

export default () => (
    <div className={classes.UserLogin}>
        <Button type={ButtonType.DANGER}>
            <FormattedMessage id="connect_doctors" defaultMessage={'Cancel'}/>
        </Button>
    </div>
);