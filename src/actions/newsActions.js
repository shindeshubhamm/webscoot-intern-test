import {
  GET_NEWS,
  SET_LOADING,
  ERROR_REDIRECT
} from './types'
import axios from 'axios'

export const getNews = (parameters) => async (dispatch) => {
  const param = parameters.split('&')
  const paramObj = {}
  param.forEach((p) => {
    const splited = p.split('=')
    paramObj[splited[0]] = splited[1]
  })
  // console.log(parseInt(paramObj.page))
  // console.log(typeof (paramObj.page))
  // console.log(typeof (paramObj.page) === "number")
  setLoading()
  try {
    const link = `https://hn.algolia.com/api/v1/search?tags=story&page=${isNaN(parseInt(paramObj.page)) ? 0 : paramObj.page}&query=${paramObj.query === undefined ? '' : paramObj.query}`
    console.log(link)
    const res = await axios.get(link)
    dispatch({
      type: GET_NEWS,
      payload: res.data
    })
  } catch (e) {
    console.log(e)
    dispatch({
      type: ERROR_REDIRECT
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
