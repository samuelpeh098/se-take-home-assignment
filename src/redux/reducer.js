import { NORMAL_ORDERS } from "./constant"
import { VIP_ORDERS } from "./constant"
import { PENDING_ORDERS } from "./constant"
import { PROCESSED_PENDING_ORDERS } from "./constant"
import { COMPLETED_ORDERS } from "./constant"
import { ADD_BOTS } from "./constant"
import { REMOVE_BOTS } from "./constant"

export const historyNormalOrders = (data = [], action) => {
  switch (action.type) {
    case NORMAL_ORDERS:
      return [action.data, ...data];
    default:
      return data;
  }
};

export const historyVipOrders = (data = [], action) => {
  switch (action.type) {
    case VIP_ORDERS:
      return [action.data, ...data];
    default:
      return data;
  }
};

export const historyPendingOrders = (data = [], action) => {
  switch (action.type) {
    case PENDING_ORDERS:
      return [action.data, ...data];
    case PROCESSED_PENDING_ORDERS:
      return [...data.filter(x => x !== action.data)];
    default:
      return data;
  }
};

export const historyCompletedOrders = (data = [], action) => {
  switch (action.type) {
    case COMPLETED_ORDERS:
      return [action.data, ...data];
    default:
      return data;
  }
};

export const historyBots = (data = [], action) => {
  switch (action.type) {
    case ADD_BOTS:
      return [action.data, ...data];
    case REMOVE_BOTS:
      return [...data.filter(x => x !== action.data)];
    default:
      return data;
  }
};
