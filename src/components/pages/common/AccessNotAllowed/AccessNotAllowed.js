// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './AccessNotAllowed.module.css';

const AccessNotAllowed = () => (
    <div className={classes.NowAllowedContent}>
        <h3>
            <FormattedMessage 
                id="not_allowed_to_access_resource" 
                defaultMessage={'You are not allowed to access this resource.'}
            />
        </h3>
    </div>
);

export default AccessNotAllowed;