// @flow

import React from 'react';
import {FormattedMessage} from 'react-intl';

import classes from './ClinicDescription.module.css';
import commonClasses from '../../../../../common.module.css';

export default () => {
    return (
        <div className={classes.ClinicDesc}>
            <p className={commonClasses.ParagraphTextIndent}>
               <FormattedMessage id="pages.clinic-main-page.clinic-description.paragraph-1" />
            </p>
            <p className={commonClasses.ParagraphTextIndent}>
               <FormattedMessage id="pages.clinic-main-page.clinic-description.paragraph-2" />
            </p>
        </div>
    );
}
