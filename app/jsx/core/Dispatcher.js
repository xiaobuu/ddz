'use strict';

import Flux from 'flux';
import assign from 'react/lib/Object.assign';

/**
 * A singleton that operates as the central hub for application updates.
 * For more information visit https://facebook.github.io/flux/
 */
let Dispatcher = assign(new Flux.Dispatcher(), {

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the server.
     */
        handleServerAction(action) {
        var payload = {
            source: 'SERVER_ACTION',
            action: action
        };
        this.dispatch(payload);
    },

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the view.
     */
        handleViewAction(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }

});

export default Dispatcher;
