import React from 'react';
import design from '../../assets/design.PNG'
import './CPU.css';

class CPU extends React.Component {

    render(){
        return <div className="CPU">
            <img src={design} alt=""/>
        </div>
    }
}

export default CPU;

/**
 *  <div className="element pc">
                <p>PC</p>
            </div>
 */