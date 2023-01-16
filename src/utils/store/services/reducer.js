import { actions } from './actions'

const initialState = {
  items: [],
  loading: false,
  error: null,
  item: {}
};

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SERVICES_REQUEST:
    case actions.GET_SERVICE_DETAILS_REQUEST:
      return { ...state, items: [], loading: true, error: null, item: {} }

    case actions.GET_SERVICES_SUCCESS:
      return { ...state, items: action.payload.items, loading: false, error: null }

    case actions.GET_SERVICE_DETAILS_SUCCESS:
      return { ...state, item: action.payload.item, loading: false, error: null }

    case actions.GET_FAILURE:
      return { ...state, items: [], item: {}, loading: false, error: action.payload.error }

    default:
      return state
  }
}
