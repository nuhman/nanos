import React from 'react';
import './InputWithCopy.css';
import {Input as BasicInput} from 'antd';
import Button from '../Button/Button';

class InputWithCopy extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      btnText: 'COPY' 
    }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    //e.target.focus();
    this.setState({ btnText: 'Copied!' },
    () => {
      setTimeout(() => {
            this.setState({
              btnText: 'Copy'
            });
          }, 2000); 
    });
  };

  render() { 
    return (
      <div className="input-copy-container">
        
        <form>
          <BasicInput
            ref={(textarea) => this.textArea = textarea}
            onChange={this.props.handleInput}
            placeholder={this.props.placeholder}
            value={this.props.value}
            readOnly={'readonly'}
          />
        </form>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */          
         document.queryCommandSupported('copy') &&
          <div className="input-copy-btn">
            <Button handleClick={this.copyToClipboard} value={this.state.btnText} disabled={this.props.value === ''}/>             
          </div>
        }
      </div>
    );
  }

}

export default InputWithCopy;