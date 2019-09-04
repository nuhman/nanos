import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './Logo.css';
import {Typography} from 'antd';

const {Title} = Typography;

class Logo extends Component{
  render(){
    return(
    <div className="logo-container">
      <Title >
        {this.props.name}
      </Title>
      <p>
        {this.props.title}
      </p>
    </div>
    );
  }
}

export default Logo;