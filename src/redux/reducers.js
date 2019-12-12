import { combineReducers } from 'redux';
import clubsReducer from './clubs/reducer'
import playersReducer from './players/reducer'

const rootRedcuers = combineReducers({
    clubs: clubsReducer,
    players: playersReducer
});

export default rootRedcuers;