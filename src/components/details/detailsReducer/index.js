import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../detailsActions/actions-type'

const getDetailss = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

const details = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_DETAILS:
      return getDetailss(state, action)
    default:
      return state
  }
}

export default details
