import { ofType } from "redux-observable";
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { map, switchMap, catchError } from 'rxjs/operators';
import { actions, getFailure, getServicesSuccess, getServiceDetailsSuccess } from './actions'

const servicesURL = 'http://localhost:7070/api/services'

export const getServicesEpic = action$ => action$.pipe(
  ofType(actions.GET_SERVICES_REQUEST),
  switchMap(() => ajax.getJSON(servicesURL).pipe(
    map(items => getServicesSuccess(items)),
    catchError(error => of(getFailure(error.message))),
  ))
)

export const getServiceDetailsEpic = action$ => action$.pipe(
  ofType(actions.GET_SERVICE_DETAILS_REQUEST),
  map(action => action.payload.id),
  switchMap(id => ajax.getJSON(`${servicesURL}/${id}`).pipe(
    map(item => getServiceDetailsSuccess(item)),
    catchError(error => of(getFailure(error.message))),
  ))
)