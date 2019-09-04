import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input} from 'antd';

const {Search} = Input;

class InputWithButton extends Component{

  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  render(){
    return(
      <Search
        placeholder={this.props.placeholder}
        value={this.props.value}
        enterButton="COPY"
        size="large"
        readOnly="readonly"
        onSearch={value =>{console.log(value);}}      
      />
    );
  }
}

export default InputWithButton;