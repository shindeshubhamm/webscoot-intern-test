import {
  GET_NEWS,
  SET_LOADING
} from '../actions/types'

const initialState = {
  news: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}