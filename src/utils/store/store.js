import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { servicesReducer } from './services/reducer';
import { getServiceDetailsEpic, getServicesEpic } from './services/epics';

const epics = combineEpics(getServiceDetailsEpic, getServicesEpic)
const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: servicesReducer,
  middleware: [epicMiddleware]
});

epicMiddleware.run(epics)

export default store
