import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { List, Grid, Image } from 'semantic-ui-react'
import MenuTree from './components/menuTree'


class App extends Component {
  constructor(){
    super();
    this.state = { mainView :'' }
    this.configureSSH = this.configureSSH.bind(this);
  }

  configureSSH(){
    const mainView = (
      <div> 
        <h1> SSH Configuration Settings </h1>
        <h3> Configure SSH authorized keys below </h3>
      </div>
    )
    this.setState({ mainView })
  }

  render() {
    const options= [
      {
        type:'menu-item',
        header:'Dashboard',
        icon:'fa fa-chart-bar',
      },
      {
        type:'menu-item',
        icon:'fa fa-history',
        header:'Automation'
      },
      {
        type:'menu-item-with-body',
        header:'Settings',
        icon:'fa fa-cog',
        run: ()=> alert('hello from settings'),
        body:[
          {
            icon: 'fa fa-lock',
            type:'menu-item-with-body',
            header:"Security",
            run: ()=> alert('hello from security'),
            body:[
              {
                icon:'fa fa-key',
                type:'menu-item',
                header: 'SSH',
                run: this.configureSSH,
              }
            ]
          }
        ]
      },
      {
        type:'menu-item-with-body',
        header:'Users',
        icon:'fa fa-user',
        body:[
          {
            icon:'fa fa-user-cog',
            type:'menu-item',
            header: 'Manage',
            run: this.configureSSH,
          },
          {
            icon:'fas fa-folder-open',
            type:'menu-item',
            header: 'Activity',
            run: ()=>{},
          }
        ]
      }]

    
    const { mainView } = this.state;
    return (
      <div className="App">
        <Grid className='full-screen-grid'>
          <Grid.Row>
            <Grid.Column width={3} className='nav'>
              <h2>Options</h2>
              <MenuTree items={options} />
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
