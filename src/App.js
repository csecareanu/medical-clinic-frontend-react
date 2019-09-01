import React from 'react';
import {FormattedMessage} from 'react-intl';

import './App.css';


function App() {
 return (
    <h1>
      <FormattedMessage  id="App.titleMessage"  defaultMessage="Medical center website."/>
    </h1>
 );
}

export default App;
