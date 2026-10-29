import { useState } from "react";
import styles from './OrdersCreate.module.css';

const OrdersCreate = ({ setOrders }) => {
  const [order, setOrder] = useState({
    id: "",
    item: "",
    total: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  }

  const handleCreate = (e) => {
    setOrders(prev => [...prev, order]);
    setOrder({
      id: "",
      item: "",
      total: ""
    });
  }

  return (
    <div className={styles.container}>
      <input name="id" value={order.id} type="text" placeholder="Input new Id" onChange={handleChange} />
      <input name="item" value={order.item} type="text" placeholder="Input new Item" onChange={handleChange} />
      <input name="total" value={order.total} type="text" placeholder="Input new Total" onChange={handleChange} />
      <button onClick={handleCreate}>등록</button>
    </div>
  );
}

export default OrdersCreate;