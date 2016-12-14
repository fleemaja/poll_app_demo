import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import polls from './polls';

const rootReducer = combineReducers({posts, comments, polls, routing: routerReducer });

export default rootReducer;
