
import React, { Component } from 'react';

class sshView extends Component {
    render() {
        const { keys } = this.props;
        return (
           <div className='ssh-view'> 
                <h1> SSH Configuration Settings </h1>
                <div className='ssh-view-box'>
                <h3> Configure SSH settings below </h3>
                <h4> These are the SSH keys allowed to connect to this computer </h4>
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


export default sshView;