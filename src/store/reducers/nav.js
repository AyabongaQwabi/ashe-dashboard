import { Map } from 'immutable';

import createActionHandler from './createActionHandler';

const initialState = Map();

const actionHandlers = {};

const redirectTo = (state, action) => {
    return state.set('currentRoute', `/${action.payload.view}`);
};


actionHandlers['REDIR'] = redirectTo;

const handle = createActionHandler(actionHandlers);

export default (state = initialState, action) => handle(state, action);