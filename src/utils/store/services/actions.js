export const actions = {
  GET_SERVICES_SUCCESS: 'GET_SERVICES_SUCCESS',
  GET_SERVICE_DETAILS_SUCCESS: 'GET_SERVICE_DETAILS_SUCCESS',
  GET_FAILURE: 'GET_FAILURE',
  GET_SERVICES_REQUEST: 'GET_SERVICES_REQUEST',
  GET_SERVICE_DETAILS_REQUEST: 'GET_SERVICE_DETAILS_REQUEST',
}

export const getServicesRequest = () => ({
  type: actions.GET_SERVICES_REQUEST
})

export const getServiceDetailsRequest = id => ({
  type: actions.GET_SERVICE_DETAILS_REQUEST, payload: { id }
})

export const getServicesSuccess = items => ({
  type: actions.GET_SERVICES_SUCCESS, payload: { items }
})

export const getServiceDetailsSuccess = item => ({
  type: actions.GET_SERVICE_DETAILS_SUCCESS, payload: { item }
})

export const getFailure = error => ({
  type: actions.GET_FAILURE, payload: { error }
})