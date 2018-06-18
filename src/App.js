
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import nav from './config/nav.json'
import Nav from './views/nav';
import './style/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { mainView :'' }
  }

  render() {
    const { mainView } = this.state;
    return (
      <div className="App">
        <Grid className='full-screen-grid'>
          <Grid.Row>
            <Grid.Column width={3} className='nav'>
              <h2>Options</h2>
              <Nav items={nav}/>
            </Grid.Column>
            <Grid.Column width={13} className='control-container'>
              {mainView}
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default App;
