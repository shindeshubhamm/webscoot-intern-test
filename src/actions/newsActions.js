import {
  GET_NEWS,
  SET_LOADING,
  ERROR_REDIRECT,
  UPDATE_PARAMETERS
} from './types'
import axios from 'axios'

export const getNews = (parameters) => async (dispatch) => {
  setLoading()
  try {
    const link = `https://hn.algolia.com/api/v1/search?tags=story&page=${isNaN(parseInt(parameters.page)) ? 0 : parameters.page}&query=${parameters.query === undefined ? '' : parameters.query}`
    // console.log(link)
    const res = await axios.get(link)
    const sentData = {
      parameters,
      data: res.data
    }
    // console.log(sentData)
    // sentData['data'] = res.data
    // console.log(sentData)
    dispatch({
      type: GET_NEWS,
      payload: sentData
    })
  } catch (e) {
    console.log(e)
    dispatch({
      type: ERROR_REDIRECT
    })
  }
}

export const updateParameters = (newParameters) => async (dispatch) => {
  console.log(newParameters)
  getNews(newParameters)
  dispatch({
    type: UPDATE_PARAMETERS,
    payload: newParameters
  })
}

const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
