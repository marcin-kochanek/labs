import types from './types';
import produce from 'immer'

const INITIAL_STATE = {
  listName: 'Favourite clubs',
  list: ['Real Madrid', 'FC Barcelona']
};

const clubsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CLUB:
      return produce(state, draftState => {
        draftState.list.push(action.club)
      })
    case types.REMOVE_CLUB:
      return produce(state, draftState => {
        draftState.list = draftState.list.filter(item => item.toLowerCase() !== action.club.toLowerCase());
      })
    case types.RESET_CLUB:
      return produce(state, draftState => {
        draftState.list = []
      })
    default:
      return state;
  }
}

export default clubsReducer;