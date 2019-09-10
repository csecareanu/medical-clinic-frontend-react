import React from 'react';

import classes from './MainLayout.module.css';
import Footer from '../../Footer/Footer'; 

class Layout extends React.Component {
    render() {
        return (
          <React.Fragment>
            <main className={classes.Layout}>
              {this.props.header}
              <div className={classes.PageContainer}>
                {this.props.children}
              </div>
              <div className={classes.FooterContainer}>
                <Footer />
              </div>
            </main>
          </React.Fragment>
         );
    }
}

export default Layout;
