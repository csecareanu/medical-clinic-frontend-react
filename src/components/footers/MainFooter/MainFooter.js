// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import classes from './MainFooter.module.css';


const MainFooter = () => (
    <footer className={classes.Footer}>
        <div className={classes.InfoContainer}>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="main-footer.data-protection"/>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="main-footer.privacy-policy" />
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="main-footer.data-security"/>
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/">
                        <FormattedMessage id="main-footer.terms-and-conditions" />
                    </NavLink>
                </p>
            </div>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="main-footer.tai-chi-medical-clinic" />
                </p>
                <p>
                    <NavLink to="/about">
                        <FormattedMessage id="main-footer.services" />
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/prices">
                        <FormattedMessage id="main-footer.prices" />
                    </NavLink>
                </p>
                <p>
                    <NavLink to="/contact">
                        <FormattedMessage id="main-footer.contact" />
                    </NavLink>
                </p>
            </div>
            <div className={classes.InfoBox}>
                <p className={classes.InfoBoxTitle}>
                    <FormattedMessage id="main-footer.contact" />
                </p>
                <p>
                    <FormattedMessage id="main-footer.short-address" />
                </p>
                <p></p>
                {/*TODO from DB*/}
                <p>(+4) 0731-245-931</p>
                <p>
                    <FormattedMessage id="work-program.open" />
                    <span>: </span>
                    {/*TODO from DB*/}
                    <FormattedMessage 
                        id="work-program.start-day-to-end-day" 
                        values={{ 
                           start_day: <FormattedMessage id="week-day.Monday" />,
                           end_day: <FormattedMessage id="week-day.Friday" />
                        }}
                    />
                    {/*TODO from DB*/}
                    <span>13:00-17:30</span>
                </p>
            </div>
        </div>

        <hr className={classes.HorizLine} />
        <div className={classes.CopyrightBox}>
            <p>
               <FormattedMessage id="app.copyright" />
            </p>
         </div>
    </footer>
);

export default MainFooter;