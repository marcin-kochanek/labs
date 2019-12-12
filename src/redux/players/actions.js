import types from './types'
import store from '../store';
import { bindActionCreators } from 'redux';

const add = player => ({ type: types.ADD_PLAYER, player })
const remove = player => ({ type: types.REMOVE_PLAYER, player });
const reset = () => ({ type: types.RESET_PLAYER })

const playersActions = bindActionCreators({
    add,
    remove,
    reset
}, store.dispatch);

export default playersActions;