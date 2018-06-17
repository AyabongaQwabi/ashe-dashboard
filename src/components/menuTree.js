import React, {Component } from 'react';
import MenuItem from './menuItem';
import * as R from 'ramda';

class MenuTree extends Component {
    render() {
      const { items } = this.props;
      
      const renderItem = (item) => {
        if(item.type === 'menu-item-with-body')
        { 
          return (<MenuItem header={item.header} run={item.run} key={item.header}>
            {item.body.map(i => renderItem(i))}
          </MenuItem>)
        }
        return <MenuItem header={item.header} run={item.run} key={item.header} />
      }

      const tree = items.map((item) => {
        return renderItem(item);
      });
      
      
      return <div className='menu-tree'>{tree}</div>
    }
  }


export default MenuTree;