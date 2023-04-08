import { NORMAL_ORDERS } from "./constant"
import { VIP_ORDERS } from "./constant"
import { PENDING_ORDERS } from "./constant"
import { PROCESSED_PENDING_ORDERS } from "./constant"
import { COMPLETED_ORDERS } from "./constant"
export const ADD_BOTS="ADD_BOTS"
export const REMOVE_BOTS="REMOVE_BOTS"

export const normalOrders = (data) => {
    return {
        type: NORMAL_ORDERS,
        data
    }
}

export const vipOrders = (data) => {
    return {
        type: VIP_ORDERS,
        data
    }
}

export const pendingOrders = (data) => {
    return {
        type: PENDING_ORDERS,
        data
    }
}

export const processedPendingOrders = (data) => {
    return {
        type: PROCESSED_PENDING_ORDERS,
        data
    }
}

export const completedOrders = (data) => {
    return {
        type: COMPLETED_ORDERS,
        data
    }
}

export const addBots = (data) => {
    return {
        type: ADD_BOTS,
        data
    }
}

export const removeBots = (data) => {
    return {
        type: REMOVE_BOTS,
        data
    }
}