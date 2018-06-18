import { Map } from 'immutable';

import createActionHandler from './createActionHandler';

const initialState = Map({currentRoute :'/home', routeData:{}});

const actionHandlers = {};

const redirectTo = (state, action) => {
    return state.set('currentRoute',`/${action.payload.view}`)
                .set('routeData',action.payload.data);
};


actionHandlers['REDIR'] = redirectTo;

const handle = createActionHandler(actionHandlers);

export default (state = initialState, action) => handle(state, action);