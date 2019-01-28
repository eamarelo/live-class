import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignUpForm from './registrationComponents/registrationForm'
import { userSignupRequest, isUserExists } from './registrationActions/index'
import './index.css'

class SignUp extends Component {
  render() {
    return (
      <div id="LoginForm">
        <SignUpForm
          userSignupRequest={userSignupRequest}
          isUserExists={isUserExists}
        />
      </div>
    )
  }
}

export default connect(null, null)(SignUp)
