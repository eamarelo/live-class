import axios from 'axios'

import actionsType from './actions-type'
import store from '../../../store'

/**
 * Format events
 * @param {Array} events
 * @return {Array} eventsFormatted
 */
const formatLessons = lessons => (
  lessons.map(lesson => ({
    id: lesson.id,
    entitled: lesson.entitled,
    author: lesson.author,
    description: lesson.description,
    mode: lesson.mode,
    theme: lesson.theme
  }))
)
const getLastLesson = lessons => ({
  type: actionsType.GET_LAST_EVENTS,
  data: formatLessons(lessons)
})

export const getEventsData = () => {
  const apiUrl = 'http://localhost:3000/class/get'
  axios.get(apiUrl).then((response) => {
    console.log(response, 'elies')
    store.dispatch(getLastLesson(response.data))
    console.log('deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', store)
  }).catch((error) => {
    console.log(error)
    console.log('recordmocj')
  })
}
