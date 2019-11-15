import React from 'react';
import { FormattedMessage } from 'react-intl';

import classes from './ClinicDescView.module.css';
import commonClasses from '../../../../../../common.module.css';

export default props => {
    const clinicDescP1 = <FormattedMessage id="main_page_clinic_desc_1" defaultMessage={'Acupuncture is a complementary medical practice that entails stimulating certain points on the body, most often with a needle penetrating the skin, to alleviate pain or to help treat various health conditions.'}/>
    const clinicDescP2 = <FormattedMessage id="main_page_clinic_desc_2" defaultMessage={'Acupuncture dates back to at least 100 B.C., which is when an organized system of diagnosis and treatment using needles was first described in writing in China.'}/>
    return (
        <div className={classes.ClinicDesc}>
            <p className={commonClasses.ParagraphTextIndent}>{clinicDescP1}</p>
            <p className={commonClasses.ParagraphTextIndent}>{clinicDescP2}</p>
        </div>
    );
}
