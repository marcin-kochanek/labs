import types from './types'
import store from '../store';
import { bindActionCreators } from 'redux'

const add = club => ({ type: types.ADD_CLUB, club });
const remove = club => ({ type: types.REMOVE_CLUB, club });
const reset = () => ({ type: types.RESET_CLUB })
const fetch = clubs => ({ type: types.FETCH_CLUBS, clubs })

const clubsActions = bindActionCreators({
    add,
    remove,
    reset,
    fetch
}, store.dispatch);

export default clubsActions