import React from 'react';

import classes from './MainLayoutView.module.css';
import commonClasses from '../../../common.module.css';
import Footer from '../../footers/Footer/Footer';
import UserLogin from '../../pages/connect/UserLogin/UserLogin';
import UserLogoutView from '../../pages/connect/UserLogoutView/UserLogoutView';
import MenuSideDrawerView from '../../side-drawers/MenuSideDrawerView/MenuSideDrawerView';

const MainLayoutView = (props) => {
    return (
        <main className={classes.Layout}>

            {props.displayMenuSideDrawerComponent ?
                <div className={commonClasses.SmallScreenOnly}>
                    <MenuSideDrawerView 
                        onClose={props.onCloseMenuSideDrawer} 
                        userAuthStatus={props.userAuthStatus}
                    />
                </div>
            :
                null
            }

            {props.displayLoginComponent ? 
                <UserLogin /> 
            : 
                null
            }

            {props.displayLogoutComponent ? 
                <UserLogoutView /> 
            : 
                null
            }

            <div className={classes.Header}>
                {props.header}
            </div>

            <div className={classes.Body}>
                {props.children}
            </div>
            
            <div className={classes.Footer}>
                <Footer />
            </div>
        </main>
    );
}

export default MainLayoutView;
