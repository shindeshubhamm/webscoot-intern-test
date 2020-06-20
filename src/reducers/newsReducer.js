import {
  GET_NEWS,
  SET_LOADING,
  UPDATE_PARAMETERS,
  ERROR_REDIRECT
} from '../actions/types'

const initialState = {
  news: null,
  pages: 0,
  loading: false,
  currentParameters: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.data.hits,
        pages: action.payload.data.nbPages,
        currentParameters: action.payload.parameters,
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case UPDATE_PARAMETERS:
      return {
        ...state,
        currentParameters: action.payload
      }

    case ERROR_REDIRECT:
      return {
        ...state
      }

    default:
      return state
  }
}