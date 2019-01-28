import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import validateInput from './validations'
import TextFieldGroup from './textField'

/**
  * LoginForm
  *
  * Component
  *
  */
class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    }

    // bind(this) permet de recupérer le contexte de la class courante
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    const { login, history } = this.props
    const { errors } = this.state
    e.preventDefault()

    // Si le form est correctement rempli
    // Axios post request
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      login(this.state).then(
        () => {
          history.push('/home')
        },
        () => {
          const keyErrors = 'UserPwd'
          errors[keyErrors] = 'Username or password not good, please try again'
          this.setState({ errors, isLoading: false })
        }
      )
    }
  }

  /**
   * isValid
   * Check if input value is valid
   * @return {Boolean} isValid
   */
  isValid() {
    const { errors, isValid } = validateInput(this.state)

    if (!isValid) {
      console.log(errors)
      this.setState({ errors })
    }

    return isValid
  }

  render() {
    const {
      errors,
      email,
      password,
      isLoading
    } = this.state

    return (
      <div id="login-form">
        <div className="main-div">
          <div className="panel">
            <h2>Login</h2>
            <p>Please enter your email and password</p>
          </div>
          <form onSubmit={this.onSubmit}>

            <TextFieldGroup
              error={errors.email ? errors.email : errors.UserPwd}
              label="email"
              onChange={this.onChange}
              value={email}
              field="email"
            />

            <TextFieldGroup
              field="password"
              label="Password"
              value={password}
              error={errors.password ? errors.password : errors.UserPwd}
              onChange={this.onChange}
              type="password"
            />

            <a href="/signup">Vous avez pas de compte?</a>
            <br />
            <a href="/forgotPassword">Mot de passe oublié?</a>
            <br />
            <br />
            <br />
            <div className="form-group"><button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm)
