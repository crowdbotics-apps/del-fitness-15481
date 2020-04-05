import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView26065Reducer from '../features/CalendarView26065/redux/reducers';
import EmailAuth26061Reducer from '../features/EmailAuth26061/redux/reducers';
import CalendarView26059Reducer from '../features/CalendarView26059/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView26065: CalendarView26065Reducer,
EmailAuth26061: EmailAuth26061Reducer,
CalendarView26059: CalendarView26059Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});