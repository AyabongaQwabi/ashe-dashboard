
import React, { Component } from 'react';
import MenuTree from '../components/menuTree'
import * as R from 'ramda';
import request from 'axios';
 
const configureSSH = () =>
    request
      .get('http://localhost:8081/keys')
      .then((keys)=> {
        const keysArr = R.without([''],keys.data.split('\n'))
        return <sshView keys={keysArr} />
      })

const navFunctionMap = {
    'config-ssh': configureSSH,
}

const functionalise = (options) => 
    options.map((option) => {
        const { type, body, run } = option;
        if(type === 'menu-item-with-body')
        { 
          const optionWithFuncBody = R.assoc('body',functionalise(body), option)
          return (optionWithFuncBody)
        }
        return R.assoc('run', navFunctionMap[run], option);
    })


class nav extends Component {

    render(){
        const { items } = this.props;
        const nav = functionalise(items)
        return (
            <MenuTree items={nav} />
        )
    }
}
export default nav;

