import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './AccessNotAllowedView.module.css';

const AccessNotAllowedView = () => (
    <div>
        <FormattedMessage 
            id="not_allowed_to_use_resource" 
            defaultMessage={'You ar not allowed to use this resource.'}
        />
    </div>
);

export default AccessNotAllowedView;