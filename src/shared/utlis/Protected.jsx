import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'


const AuthenticateRoute = (ComposedComponent) => {
  class Auth extends React.Component {
    constructor(props) {
      super(props)
    }
    render(){
      if(!this.props.isAuthenticated)
        return <Redirect to='/' />
      return <ComposedComponent {...this.props} />
    }
  }
  return connect(
    ({isAuthenticated}) =>({isAuthenticated}),{}
  )(Auth)
}

export default AuthenticateRoute;
