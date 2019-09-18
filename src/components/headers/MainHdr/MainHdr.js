import React from 'react';

import classes from './MainHdr.module.css';
import commonClasses from '../../../common.module.css';
import imgMain from '../../../static/images/main_hdr.jpg';
import MainImageView from '../common/MainImageView/MainImageView';
import ClinicMenuView from '../../menus/ClinicMenuView/ClinicMenuView';
import DoctorMenuView from '../../menus/DoctorMenuView/DoctorMenuView';
import AboutClinicToolbarView from '../../toolbars/AboutClinicToolbarView/AboutClinicToolbarView';
import UserToolbarView from '../../toolbars/UserToolbarView/UserToolbarView';
import MenuToolbarView from '../../toolbars/MenuToolbarView/MenuToolbarView';
import SideDrawerToolbarView from '../../toolbars/SideDrawerToolbarView/SideDrawerToolbarView';
import SideDrawerView from '../../menus/SideDrawerView/SideDrawerView';


class MainHdr extends React.Component {

    state = {
        sideDrawerVisible: false
    }

    showSideDrawerHandler = () => {
        return this.setState({
            sideDrawerVisible: true
        });
    }    

    closeSideDrawerHandler = () => {
        return this.setState({
            sideDrawerVisible: false
        });
    }

    render() {

        let menuContent = (
            <React.Fragment>
                <DoctorMenuView />
                <ClinicMenuView />
            </React.Fragment>
        );
        
        return (
            <header className={classes.Header}>
                <nav>
                    <AboutClinicToolbarView />
                    <div className={classes.ToolbarVSeparator} />
                    <div className={classes.MenuToggle_UserAccount_Toolbars}>
                        <div className={commonClasses.SmallScreenOnly}>
                            <SideDrawerToolbarView 
                                showSideDrawerHandler={this.showSideDrawerHandler}
                            />
                        </div>
                        <UserToolbarView />
                    </div>
                    <div className={commonClasses.SmallScreenOnly}>
                        <SideDrawerView 
                            open={this.state.sideDrawerVisible}
                            closeHandler={this.closeSideDrawerHandler}
                        >
                            {menuContent}
                        </SideDrawerView>
                    </div>
                    <div className={commonClasses.LargeScreenOnly} >
                        <MenuToolbarView>
                            {menuContent}
                        </MenuToolbarView>
                    </div>
                    <MainImageView src={imgMain} />
                </nav>
            </header>
        );
    }
}

export default MainHdr;