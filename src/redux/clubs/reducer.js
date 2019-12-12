import types from './types';

const INITIAL_STATE = {
  listName: 'Favourite clubs',
  list: ['Real Madrid', 'FC Barcelona']
};

const clubsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CLUB:
      return {
        ...state, list: [...state.list, action.club]
      }
    case types.REMOVE_CLUB:
      const list = state.list.filter(item => item.toLowerCase() !== action.club.toLowerCase());
      return {...state, list }
    case types.RESET_CLUB:
      return {
        ...state, list: []
      }
    default:
      return state;
  }
}

export default clubsReducer;