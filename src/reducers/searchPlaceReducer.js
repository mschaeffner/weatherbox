import {
  SEARCH_PLACE_CLEAR,
  SEARCH_PLACE,
  SEARCH_PLACE_SUCCESS,
  SEARCH_PLACE_FAILURE
} from '../actions/searchPlaceActions'


const INITIAL_STATE = {
  keyword: '',
  results: [],
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case SEARCH_PLACE_CLEAR:
      return INITIAL_STATE

    case SEARCH_PLACE:
      return {
        keyword: action.payload,
        results: [],
        error: null,
        loading: true
      }

    case SEARCH_PLACE_SUCCESS:
      return {
        keyword: state.keyword,
        results: action.payload,
        error: null,
        loading: false
      }

    case SEARCH_PLACE_FAILURE:
      return {
        keyword: state.keyword,
        results: [],
        error: action.payload,
        loading: false
      }

    default:
      return state
  }
}
