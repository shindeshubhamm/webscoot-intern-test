import {
  GET_NEWS,
  SET_LOADING
} from './types'
import axios from 'axios'

export const getNews = () => async (dispatch) => {
  setLoading()
  const res = await axios.get('https://hn.algolia.com/api/v1/search')
  dispatch({
    type: GET_NEWS,
    payload: res.data.hits
  })
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
