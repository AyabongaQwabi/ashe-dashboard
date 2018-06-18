
import React, { Component } from 'react';
import MenuTree from '../components/menuTree'
import * as R from 'ramda';
import request from 'axios';
import { connect } from 'react-redux';
import navigateTo from '../store/actions/nav'
import generateHeaders from '../config/kix/gen'

const configureSSH = (dispatch) => () => {
    const headers = generateHeaders();
    return request
      .get('http://localhost:8081/keys', headers)
      .then((keys)=> {
        const keysArr = R.without([''],keys.data.split('\n'))
        dispatch(navigateTo('ssh',{ keys: keysArr }))
      })
}
const loadHome = (dispatch) => () => dispatch(navigateTo('home', {}));

const configureAutomation = (dispatch) => () => dispatch(navigateTo('automation', {}));

const navFunctionMap = {
    'config-ssh': configureSSH,
    'home': loadHome,
    'config-auto': configureAutomation,
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
        console.log(nav)
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

