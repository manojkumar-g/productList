import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {requestAuth} from '../actions'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage:1,
      userName:'',
      password:'',
      gotoGalarry:false,
      userNameError:false,
      passwordError:false,
      errorMsg:'',
      isError:false
    }
  }
  componentDidMount() {
    this.userName.focus();
  }
  validateUserName = (value) => {
    if(!value){
      this.setState({isError:true,errorMsg:'Email Should not be Empty'})
      return false;
    }
    let atpos = value.indexOf("@");
    let dotpos = value.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=value.length) {
        this.setState({isError:true,errorMsg:'Email Should be Valid.'})
        return false;
    }
    return true;
  }
  validatePassword =(value) => {
    // debugger;
    console.log('password',value)
    if(!value){
      this.setState({isError:true,errorMsg:'Password Should not be Empty'})
      return false;
    }
    let isCap = (ch) => ch.charCodeAt(0) >=65 && ch.charCodeAt(0) <=90 ;
    let result = false;
    Array.from(value).map(
      x => {
        if(isCap(x))
          result = true;
      }
    )
    if(!result)
      this.setState({isError:true,errorMsg:'Password Should Contain Atleast on Capital Letter'})

    return result;
  }
  onChange = ({target:{name,value}}) =>{
    this.setState({[name]:value})
  }
  onKeyUp = (from,e)=>{
    let {keyCode} = e
    if(keyCode !== 13)
      return

    switch (from) {
      case 'userName':
        if(this.validateUserName(this.state.userName))
          this.setState({stage:2,isError:false,errorMsg:''});
        break;
      case 'password':
        // debugger;
        if(this.validatePassword(this.state.password)){
          this.props.dispatch(requestAuth(this.state.userName,this.state.password));
          this.setState({gotoGalarry:true})
        }

        break;
    }
  }
  render(){
    // console.log(this.props)
    if(this.state.gotoGalarry){
      return <Redirect to ='/gallary'/>
    }
    return(
      <main className = 'login-main'>
        {
          (this.state.isError || this.props.authFailed) &&

        <div className = 'flash'>
          {(this.props.authFailed && !this.state.isError) && <span>Login Failed</span>}
          {this.state.errorMsg}
        </div>
      }
        {
          this.state.stage == 1 &&
          <span>
            <h1 className = 'login-heading'>Sign In</h1>
            <input
              type='text'
              className = 'login-input'
              placeholder = 'Email'
              ref={(input) => { this.userName = input; }}
              name = 'userName'
              value = {this.state.userName}
              onChange = {this.onChange}
              onKeyUp = {this.onKeyUp.bind(null,'userName')}
            />
            <button
              onClick = {this.onKeyUp.bind(null,'userName',{keyCode:13})}
              className = 'login-button'
               >Next</button>
          </span>
        }
        {
          this.state.stage == 2 &&
          <span>
            <h1 className = 'login-heading'>Enter Password</h1>
            <div className ='login-username'>
              {this.state.userName}
              <i className="fa fa-user-circle user-icon" aria-hidden="true"></i>
            </div>
            <input
              type='password'
              className = 'login-input'
              placeholder = 'Password'
              ref={(input) => {
                if(input)
                  input.focus()
              }}
              name = 'password'
              value = {this.state.password}
              onChange = {this.onChange}
              onKeyUp = {this.onKeyUp.bind(null,'password')}
            />
            <button
              className = 'login-button-two'
              style = {{background:'silver'}}
              onClick = {() => this.setState({stage:1})}
               >Back</button>
            <button
              className = 'login-button-two'
              onClick = {this.onKeyUp.bind(null,'password',{keyCode:13})}
               >Sign in</button>
          </span>
        }
      </main>
    )
  }
}

export default connect(
  ({isAuthenticated,authFailed}) =>({isAuthenticated,authFailed})
)(Login);
