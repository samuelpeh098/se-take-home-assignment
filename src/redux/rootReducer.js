import {combineReducers} from 'redux'
import { historyNormalOrders } from './reducer'
import { historyVipOrders } from './reducer'
import { historyPendingOrders } from './reducer'
import { historyCompletedOrders } from './reducer'
import { historyBots } from './reducer'

export default combineReducers({
    historyNormalOrders,
    historyVipOrders,
    historyPendingOrders,
    historyCompletedOrders,
    historyBots,
})