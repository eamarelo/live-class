/**
  *
  * ACTION
  *
  * Fluc d'information que l'ont veut envoyer
  * à notre State globale
  *
  */
import axios from 'axios'
import jwt from 'jsonwebtoken'
import store from '../../../store'
import setAuthorizationToken from '../loginComponents/setAuthorizationToken'

/**
  * Disptach auth register
  * @param {Object} auth
  */
export default function userAuth(auth) {
  return {
    type: 'USER_AUTH',
    auth
  }
}

/**
  * Action de vérifier un utilisateur en base
  * @param {Object} user
  * @return {Object} Promise response
  */
export function login(user) {
  return new Promise((resolve, reject) => {
    axios.post('https://localhost:3000/auth/login', user)
      .then((response) => {
        // Here response from routes -> auth
        const { token } = response.data
        // On stock un token dans le localStorage
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token)
        // dispatch méthode
        store.dispatch(userAuth(jwt.decode(token)))
        resolve(response.config.data)
      }, (errors) => {
        reject(errors)
      })
  })
}
