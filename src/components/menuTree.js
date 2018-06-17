import React, {Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';

class MenuTree extends Component {
    render() {
      const { items } = this.props;
      const renderItem = (item) => {
        const { header, run, icon, body, type } = item;
        if(type === 'menu-item-with-body')
        { 
          return (<MenuItem header={header} run={run} key={header} icon={icon}>
            {body.map(i => renderItem(i))}
          </MenuItem>)
        }
        return <MenuItem header={header} run={run} key={header} icon={icon} />
      }

      const tree = items.map((item) => {
        return renderItem(item);
      });
      
      
      return <div className='menu-tree'>{tree}</div>
    }
  }

MenuTree.propTypes ={
    item: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string.isRequired,
      body: PropTypes.array,
      run: PropTypes.func,
      icon:PropTypes.string
    }))
};

export default MenuTree;