import types from './types'
import store from '../store';
import { bindActionCreators } from 'redux'

const add = club => ({ type: types.ADD_CLUB, club });
const remove = club => ({ type: types.REMOVE_CLUB, club });
const reset = () => ({ type: types.RESET_CLUB })

const clubsActions = bindActionCreators({
    add,
    remove,
    reset
}, store.dispatch);

export default clubsActions