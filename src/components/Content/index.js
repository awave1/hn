import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/MainPage';

class Content extends React.Component {
  render() {
    return(
      <div style={{height: "100%"}}>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

export default Content;