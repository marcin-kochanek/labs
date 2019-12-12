import types from './types';

const INITIAL_STATE = {
    listName: 'Favourite players',
    list: ['Cristiano Ronaldo', 'Messi']
};

const playersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_PLAYER:
        return {
          ...state, list: [...state.list, action.player]
        }
      case types.REMOVE_PLAYER:
        const list = state.list.filter(item => item.toLowerCase() !== action.player.toLowerCase());
        return {...state, list }
      case types.RESET_PLAYER:
        return {
          ...state, list: []
        }
      default:
        return state;
    }
}

export default playersReducer;