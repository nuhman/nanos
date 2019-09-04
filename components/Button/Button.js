import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Button.css';
import {Button as BasicButton} from 'antd';

class Button extends Component{
  render(){
    return(
      <BasicButton onClick={this.props.handleClick} 
        loading={this.props.loading} 
        disabled={this.props.disabled}
        className="basic-btn" 
        type="primary" 
        size={'large'}>
          {this.props.value}
      </BasicButton>
    );
  }
}

export default Button;