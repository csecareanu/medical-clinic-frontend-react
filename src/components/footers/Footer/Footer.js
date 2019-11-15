import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classes from './Footer.module.css';


export default () => (
    <footer className={classes.Footer}>
        <div className={classes.InfoContainer}>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="data_protection" defaultMessage={'Data Protection'}/>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="privacy_policy" defaultMessage={'Privacy policy'}/>
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="data_security" defaultMessage={'Data security'}/>
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="terms_and_conditions" defaultMessage={'Terms and Conditions'}/>
                    </NavLink>
                </p>
            </div>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="tai_chi_medical_clinic" defaultMessage={'Tai Chi Medical Clinic'}/>
                </p>
                <p>
                    <NavLink to="/about">
                        <FormattedMessage id="services" defaultMessage={'Services'}/>
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/prices">
                        <FormattedMessage id="prices" defaultMessage={'Prices'}/>
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/contact">
                        <FormattedMessage id="contact" defaultMessage={'Contact'}/>
                    </NavLink>
                </p>
            </div>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="contact" defaultMessage={'Contact'}/>
                </p>
                <p>
                    <FormattedMessage 
                        id="short_address" 
                        defaultMessage={'19-21 Ion Heliade Radulescu Street, Targoviste, Dambovita County'}
                    />
                </p>
                <p></p>
                <p>(+4) 0731-245-931</p>
                <p>
                    <FormattedMessage id="work_program" defaultMessage="Open" />
                    <span>: </span>
                    <FormattedMessage id="monday_to_friday" defaultMessage="Monday to Friday" />
                    <span> - 13:00-17:30</span>
                </p>
            </div>
        </div>

        <hr className={classes.HorizLine} />
        <div className={classes.CopyrightBox}><p>© 2019 Tai Chi Medical</p></div>
    </footer>
);