
import React, { Component } from 'react';
import MenuTree from '../components/menuTree'
import * as R from 'ramda';
import request from 'axios';
import { connect } from 'react-redux';
import navigateTo from '../store/actions/nav'

const configureSSH = (dispatch) => () =>
    request
      .get('http://localhost:8081/keys')
      .then((keys)=> {
        const keysArr = R.without([''],keys.data.split('\n'))
        dispatch(navigateTo('ssh',{ keys: keysArr }))
      })

const navFunctionMap = {
    'config-ssh': configureSSH,
}

const functionalise = R.curry((dispatch, options) => 
    options.map((option) => {
        const { type, body, run } = option;
        if(type === 'menu-item-with-body')
        { 
          const optionWithFuncBody = R.assoc('body',functionalise(dispatch, body), option)
          return (optionWithFuncBody)
        }
        return run ? R.assoc('run', navFunctionMap[run](dispatch), option) : option;
    }))


class nav extends Component {
    render(){
        const { items, navigate } = this.props;
        const nav = navigate(items)
        return (
            <MenuTree items={nav} />
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    navigate: functionalise(dispatch),
});

export default connect(
    null,
    mapDispatchToProps,
)(nav);

