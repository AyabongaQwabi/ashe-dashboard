
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import nav from './config/nav.json'
import Nav from './views/nav';
import './style/App.css';
import automation from './views/automation';
import sshView from './views/ssh';
import home from './views/home';
import { connect } from 'react-redux';

const views = {
  'home': home,
  'ssh': sshView,
  'automation': automation,
};

const getView = (type) =>  views[type];

class App extends Component {
  render() {
    const { currentRoute, routeData } =  this.props;
    const props = routeData;
    const MainView = getView(currentRoute.replace('/',''))
    return (
      <div className="App">
        <Grid className='full-screen-grid'>
          <Grid.Row>
            <Grid.Column width={3} className='nav'>
              <h2>Options</h2>
              <Nav items={nav}/>
            </Grid.Column>
            <Grid.Column width={13} className='control-container'>
              <MainView {...props} />
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentRoute: state.getIn(['nav','currentRoute']),
  routeData: state.getIn(['nav','routeData'])
})

export default connect(mapStateToProps)(App);
