// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import type { RouterHistory } from 'react-router';

import classes from './UserLoggedInMsg.module.css';
import Button, { ButtonType } from '../../../UI/Button/Button';
import { ClinicLinkLocationName } from '../../../../common/LinkLocationNames';

type Props = {
    history: RouterHistory
}

const UserLoggedInMsg = (props: Props) => (
    <div className={classes.AlreadyLoggedInContent}>

        <h3>
            <FormattedMessage 
                id="logged_in_notification" 
                defaultMessage={'You are logged in'}
            />
        </h3>

        <Button
            type={ ButtonType.SUCCESS }
            onClick={() => { props.history.push({pathname: ClinicLinkLocationName.ROOT}); }}
        >
            <FormattedMessage 
                id="navigate_to_home_page" 
                defaultMessage={'Navigate to home page'}
            />
        </Button>
        
    </div>
);

export default withRouter(UserLoggedInMsg);