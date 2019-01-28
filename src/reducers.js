import { combineReducers } from 'redux'

import home from './components/home/homeReducer'
import login from './components/login/loginReducer'
import registration from './components/registration/registrationReducer'

export default combineReducers({
  home,
  login,
  registration
})
