import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

/**
* validateInput to tcheck from sign up
* @param {Object} data
* @return {Object or Boolean} errors or isValid
*/
export default function validateInput(data) {
  const errors = {}

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
