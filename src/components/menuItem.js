import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

class MenuItem extends Component {
    constructor(){
        super();
        this.state = { kidsState:'show' }
        this.toggleKidsState = this.toggleKidsState.bind(this);
    }

    toggleKidsState(){
        console.log('toggilng kid state')
        if(this.state.kidsState === 'hide'){
            this.setState({kidsState: 'show'});
        }
        else{
            this.setState({kidsState: 'hide'});
        }
        
    }

    render() {
      const {header, children , run, body, icon } = this.props;
      let onclick = !R.isNil(children) ? {} :  run;
      return (
        <div className='menu-item'>
            <div className='menu-item-header' onClick={R.isEmpty(onclick) ? this.toggleKidsState : onclick}>
            <i className={icon} ariaHidden="true"></i>
            {header}
            </div>
            <div className={`menu-item-body ${this.state.kidsState}`}>{children}</div>
        </div>
      );
    }
  }

MenuItem.propTypes ={
    header: PropTypes.string.isRequired,
    run: PropTypes.func,
    icon: PropTypes.string
};

export default MenuItem;

