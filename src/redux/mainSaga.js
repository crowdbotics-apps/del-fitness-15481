import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView26065Saga from '../features/CalendarView26065/redux/sagas';
import EmailAuth26061Saga from '../features/EmailAuth26061/redux/sagas';
import CalendarView26059Saga from '../features/CalendarView26059/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView26065Saga,
EmailAuth26061Saga,
CalendarView26059Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}