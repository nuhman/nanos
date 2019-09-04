import React, { Component } from 'react';
import { render } from 'react-dom';
import Input from './components/Input/Input';
import InputWithButton from './components/Input/InputWithButton';
import InputWithCopy from './components/Input/InputWithCopy';
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import isUrl from './utilities/urlValidator';
import 'antd/dist/antd.css';
import {Row, Col, message} from 'antd';
import Icon from 'antd/lib/icon';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Nanos',
      title: 'A straightforward URL shortener service. ',
      description: 'Convert any links to manageable short URLs for easy usage. No intrusive ads or other complications. ',
      siteLink: 'https://react-nvafvp.stackblitz.io',
      apiUrl: 'https://cors-anywhere.herokuapp.com/https://nanos.herokuapp.com/new/',
      inputUrlHint: 'https://example.com',
      inputUrl: '',
      submitBtnText: 'Shorten',
      shortenedUrlHint: 'shortened url appears here!',
      shortenedUrl: '',
      sampleShortUrl: 'https://nanos.herokuapp.com/Z7f8Jq',
      loading: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(){ 

    if(!isUrl(this.state.inputUrl)){
      //message.error('Invalid URL!');
      let $timer = setTimeout(() => {
      clearTimeout($timer)
      $timer = null
      message.error(`Invalid URL!`, 2)
      }, 0)
      return false;
    }      

    let url = ''; 
    this.setState({
        loading: true,      
    }, () => {
      console.log('Loading Indicator: Start!');
      url = `${this.state.apiUrl + this.state.inputUrl}`;
      console.log("URL: ", url);
      fetch(url)
        .then(response => {console.log(response); return response.json()})
        .then(data => {
            setTimeout(() => {
            this.setState({
              shortenedUrl: data.short_url,
              loading: false
            }, () => {
              message.success('Url shortening successful!');
              console.log('Loading Indicator: End!')
            });
          }, 2000); 
        })
        .catch(error => {
          message.error('Sorry! Check your connection and try again.');
          console.log("Error while fetching: ", error);
        });
      
    }); 
  }

  handleInput(e){
    this.setState({
      inputUrl: e.target.value
    }, () => console.log(this.state.inputUrl));
  }

  render() {
    return (
      <div className="main-container">
        <Row>   
          <Col span={24}> 
            <Logo name={this.state.name} title={this.state.title}/>
          </Col>  
        </Row>   
        <Row style={{width: '50%'}}>        
          <Col span={24}> 
            <Input  placeholder={this.state.inputUrlHint} value={this.state.inputUrl} handleInput={this.handleInput}/>        
          </Col>  
        </Row>     
        <Row>
          <Col className="submit-btn" xs={20} sm={20} md={12} lg={12} xl={12}> 
            <Button handleClick={this.handleSubmit} loading={this.state.loading} value={this.state.submitBtnText}/>        
          </Col>     
        </Row>
        <Row style={{width: '50%'}}>
          <Col span={24}> 
            <InputWithCopy placeholder={this.state.shortenedUrlHint} value={this.state.shortenedUrl} />        
          </Col>     
        </Row>
        <Row>
          <Col className="social-icons-container" span={24}> 
            <a href={`whatsapp://send?text=${this.state.title + this.state.description} Check out at ${this.state.siteLink}`} target="_blank"><Icon type="message" style={{fontSize: '24px'}} theme="filled"/></a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.siteLink}`} target="_blank"><Icon type="facebook" style={{fontSize: '24px'}} theme="filled"/></a>
            <a href={`http://www.reddit.com/submit?url=${this.state.siteLink}&title=${this.state.title + this.state.description}`} target="_blank" ><Icon type="reddit" style={{fontSize: '24px'}} /></a>
            <a href={`http://github.com/nuhman/url-shortener`} target="_blank" ><Icon type="github" style={{fontSize: '24px'}} theme="filled"/></a>
          </Col>     
        </Row>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
