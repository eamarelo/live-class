/**
  *
  * ACTION
  *
  * Fluc d'information que l'ont veut envoyer
  * à notre State globale
  *
  */
import axios from 'axios'
import store from '../../../store'

/**
  * Disptach user register
  * @param {Object} user
  */
const userRegister = user => ({
  type: 'USER_REGISTER',
  user
})

/**
  * Action d'ajouter un utilisateur en base
  * @param {Object} user
  * @return {Object} Promise response
  */
export function userSignupRequest(user) {
  return new Promise((resolve, reject) => {
    axios.post('https://localhost:3000/auth/register/', user)
      .then((response) => {
        console.log('response---------------------------------------', response.data)
        store.dispatch(userRegister(response.data.id))
        // Succes de la requête en envoyant ce qu'on veut
        resolve(response.config.data)
      }, (err) => {
        console.log(err)
        reject(err)
      })
  })
}

/**
  * Disptach user register
  * @param {Object} userExist
  */
const userExists = isUserExist => ({
  type: 'IS_USER_EXIST',
  isUserExist
})

/**
  * Action de check si l'utilisateur existe en base
  * @param {Object} identifier
  * @return {Object} Promise response
  */
export function isUserExists(identifier) {
  return new Promise((resolve) => {
    console.log('---------------identifier---------------', identifier)
    axios.get(`https://localhost:3000/user/show/${identifier}`)
      .then((response) => {
        // dispatch méthode
        store.dispatch(userExists(response.data.user))
        resolve(response.data.user)
      }).catch((err) => {
        console.log(err)
      })
  })
}
