import { combineReducers } from 'redux';
import CoursesReducers from './CoursesReducer';

const rootReducer = combineReducers({
  courses: CoursesReducers
});

export default rootReducer;