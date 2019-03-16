import axios from 'axios'

import actionsType from './actions-type'
import store from '../../../store'

/**
 * Format events
 * @param {Array} events
 * @return {Array} eventsFormatted
 */
const formatDetails = lessons => (
  lessons.map(lesson => ({
    id: lesson.id,
    entitled: lesson.entitled,
    author: lesson.author,
    description: lesson.description,
    mode: lesson.mode,
    theme: lesson.theme
  }))
)
const getTheDetails = lessons => ({
  type: actionsType.GET_DETAILS,
  data: formatDetails(lessons)
})

export const getDetailsData = () => {
  const { match } = this.props
  const apiUrl = `http://localhost:3000/class/get${match.params.id}`
  axios.get(apiUrl).then((response) => {
    console.log(response, 'elies')
    store.dispatch(getTheDetails(response.data))
    console.log('deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', store)
  }).catch((error) => {
    console.log(error)
    console.log('recordmocj')
  })
}
