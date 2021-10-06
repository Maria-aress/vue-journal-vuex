

import state from './state'
import * as actions from './actions'
import * as getters from './geters'
import * as mutations from './mutations'

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule