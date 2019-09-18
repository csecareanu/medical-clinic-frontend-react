import React from 'react';

import classes from './MainLayout.module.css';
import FooterView from '../../FooterView/FooterView';
import SideDrawer from '../../menus/SideDrawer/SideDrawer';

class Layout extends React.Component {
    render() {
        return (
          <main className={classes.LayoutContainer}>
            <div className={classes.HeaderContainer}>
              {this.props.header}
            </div>
            <div className={classes.BodyContainer}>
              <SideDrawer open={false}/>
              {this.props.children}
            </div>
            <div className={classes.FooterContainer}>
              <FooterView />
            </div>
          </main>
         );
    }
}

export default Layout;
