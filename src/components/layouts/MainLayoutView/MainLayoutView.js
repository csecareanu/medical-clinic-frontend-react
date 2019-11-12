import React from 'react';

import classes from './MainLayoutView.module.css';
import FooterView from '../../FooterView/FooterView';
import UserLoginView from '../../pages/connect/UserLoginView/UserLoginView';
import UserLogoutView from '../../pages/connect/UserLogoutView/UserLogoutView';
import UIStateContext from '../../UIState/UIState-context';

class Layout extends React.Component {

  static contextType = UIStateContext;

  render() {
    return (
      <main className={classes.LayoutContainer}>

        {this.context.displayLoginComponent? <UserLoginView /> : null}
        {this.context.displayLogoutComponent? <UserLogoutView /> : null}

        <div className={classes.HeaderContainer}>
          {this.props.header}
        </div>
        <div className={classes.BodyContainer}>
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
