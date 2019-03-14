import { fromJS } from 'immutable'

import initialState from './initial-state'
import actionsType from '../homeActions/actions-type'

const getLastLesson = (state, action) => (
  fromJS(state)
    .setIn(['data'], action.data)
    .toJS()
)

const home = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_LAST_EVENTS:
      return getLastLesson(state, action)
    default:
      return state
  }
}

export default home
