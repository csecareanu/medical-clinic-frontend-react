import React from 'react';
import Footer from '../../Footer/Footer';

class Layout extends React.Component {
    render() {
        return (
          <React.Fragment>
            <main>
              {this.props.header}
              {this.props.children}
              <Footer />
            </main>
          </React.Fragment>
         );
    }
}

export default Layout;
