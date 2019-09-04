import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Input.css';
import {Input as BasicInput} from 'antd';

class Input extends Component{
  render(){
    return(
      <BasicInput placeholder={this.props.placeholder} onChange={this.props.handleInput} />
    );
  }
}

export default Input;