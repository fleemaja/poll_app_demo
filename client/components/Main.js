import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>
            <Link to="/">Poll Vault</Link>
          </h1>
          {React.cloneElement({...this.props}.children, {...this.props})}
        </div>
      </MuiThemeProvider>
    )
  }
});

export default Main;
