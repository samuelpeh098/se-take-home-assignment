import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { normalOrders } from "../redux/action";
import { vipOrders } from "../redux/action";
import { pendingOrders } from "../redux/action";
import { processedPendingOrders } from "../redux/action";
import { completedOrders } from "../redux/action";
import { addBots, removeBots } from "../redux/action";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function Home() {
  const dispatch = useDispatch();
  let historyNormalOrders = useSelector(
    (state: any) => state.historyNormalOrders
  );
  let historyVipOrders = useSelector((state: any) => state.historyVipOrders);
  let historyPendingOrders = useSelector(
    (state: any) => state.historyPendingOrders
  );
  let historyCompletedOrders = useSelector(
    (state: any) => state.historyCompletedOrders
  );
  let historyBots = useSelector((state: any) => state.historyBots);
  const orderNumber: any =
  historyNormalOrders.length + historyVipOrders.length + 1;

  const addNormalOrder = () => {
    dispatch(normalOrders({ type: "normal", orderNumber }));
    dispatch(pendingOrders({ type: "normal", orderNumber }));
  };

  const addVipOrder = () => {
    dispatch(vipOrders({ type: "vip", orderNumber }));
    dispatch(pendingOrders({ type: "vip", orderNumber }));
  };

  const processOrders = () => {
    const vip_orders = _.filter(historyPendingOrders, { type: "vip" });
    let curr_vip_order: any;
    let curr_order: any;

    if (vip_orders && vip_orders.length > 0) {
      setTimeout(() => {
        for (var i = 0; i < vip_orders.length; i++) {
          curr_vip_order = vip_orders[i];
        }
        dispatch(processedPendingOrders(curr_vip_order));
        dispatch(completedOrders(curr_vip_order));
      }, 10000);
    } else {
      setTimeout(() => {
        for (var i = 0; i < historyPendingOrders.length; i++) {
          curr_order = historyPendingOrders[i];
        }
        dispatch(processedPendingOrders(curr_order));
        dispatch(completedOrders(curr_order));
      }, 10000);
    }
  };

  const addBot = () => {
    const botNumber = historyBots.length + 1;
    dispatch(addBots(botNumber));
  };

  const removeBot = () => {
    const lastBot = historyBots[historyBots.length - 1];
    dispatch(removeBots(lastBot));
  };

  useEffect(() => {
    if (historyBots.length > 0 && historyPendingOrders.length > 0) {
      processOrders();
    }
  }, [historyBots, historyPendingOrders]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>McDonalds Order Management System</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>New Order</h2>
            <div className={styles.buttons}>
              <button onClick={addNormalOrder}>New Normal Order</button>
              <button onClick={addVipOrder}>New VIP Order</button>
            </div>
          </div>
          <div className={styles.bot}>
            <h2>Bot Management</h2>
            <button onClick={addBot}>+ Bot</button>
            <button onClick={removeBot}>- Bot</button>
            <div>Active Bots: {historyBots && historyBots.length}</div>
          </div>

          <div className={styles.card}>
            <h2>Pending</h2>
            {historyPendingOrders.length > 0 ? (
              <ul>
                {historyPendingOrders.map((order: any, index: number) => (
                  <li key={index}>
                    {order && order.type === "vip" ? "VIP" : "Normal"} Order #
                    {order && order.orderNumber}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No pending orders</p>
            )}
          </div>

          <div className={styles.card}>
            <h2>Completed</h2>
            {historyCompletedOrders.length > 0 ? (
              <ul>
                {historyCompletedOrders.map((order: any, index: number) => (
                  <li key={index}>
                    {order && order.type === "vip" ? "VIP" : "Normal"} Order #
                    {order && order.orderNumber}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No completed orders</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
