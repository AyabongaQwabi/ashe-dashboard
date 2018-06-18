
import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addKey } from '../store/actions/ssh'

class sshView extends Component {
    constructor(){
        super();
        this.addNewKey = this.addNewKey.bind(this);
        this.updateKeyArea= this.updateKeyArea.bind(this);
        this.state = {
            newKey: {
                addNewKeyActive: false,
                keyArea:'',
            }
        }
    }
    updateKeyArea(e){
        const keyArea = e.target.value;
        console.log(e.target.value)
        const  { addNewKeyActive } = this.state.newKey;
        this.setState({ newKey: { addNewKeyActive, keyArea } })
    }

    addNewKey() {
        const { keyArea } = this.state.newKey;
        const addNewKeyActive = !this.state.newKey.addNewKeyActive;
        this.setState({ newKey: { addNewKeyActive, keyArea } })
    }

    render() {
        const { keys, addKey } = this.props;
        const addSSHKey = (k) => () => addKey(k);

        const { addNewKeyActive ,keyArea } = this.state.newKey;
        return (
           <div className='ssh-view'> 
                <h1> SSH Configuration Settings </h1>
                <div className='ssh-view-box'>
                <h3> Configure SSH settings below </h3>
                <h4> These are the SSH keys allowed to connect to this computer </h4>
                <div className='action-tray'>
                    <Button animated='vertical' onClick={this.addNewKey}>
                        <Button.Content hidden >Add</Button.Content>
                        <Button.Content visible>
                            <Icon name='plus' />
                        </Button.Content>
                    </Button>
                    <div className='action-playground'>
                        {addNewKeyActive && 
                            <div>
                                <p> Enter/paste key here </p>
                                <textarea value={keyArea} onChange={this.updateKeyArea}></textarea>
                                <Button color='purple' onClick={addSSHKey(keyArea)}>
                                    Add
                                </Button>
                            </div>
                        }
                    </div>
                </div>
                <div className='keys'> 
                    {keys.map((key) => (
                    <div className='ssh-box'>
                        <div className='icon-box'><i className='fa fa-times-circle'></i></div>
                        {key}
                    </div>
                    ))}
                </div>
             </div>
            </div>
        )
    }
}

sshView.propTypes = {
    keys: PropTypes.array,
}

const mapDispatchToProps = (dispatch) => ({
    addKey: addKey(dispatch),
})
export default connect(null, mapDispatchToProps)(sshView)