import React, { useContext } from 'react';

import classes from './UserToolbarView.module.css';
import NewAppointmentToolbarItemView from './NewAppointmentToolbarItemView/NewAppointmentToolbarItemView';
import MyAccountToolbarItemView from './MyAccountToolbarItemView/MyAccountToolbarItemView';
import UIStateContext from '../../UIState/UIState-context';
import { UserAuthStatus } from '../../common/UserAuthStatus';

const UserToolbarView = () => {
    const uiStateContext = useContext(UIStateContext);
    return (
        <div className={classes.Toolbar}>
            <div className={classes.RightItems}>
                <NewAppointmentToolbarItemView />
                {uiStateContext.userAuthStatus !== UserAuthStatus.UNAUTHENTICATED? 
                        <MyAccountToolbarItemView /> : null
                }
            </div>
        </div>
    );
}
export default UserToolbarView;