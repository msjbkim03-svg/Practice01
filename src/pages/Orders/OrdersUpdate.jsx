import { useState } from "react";
import styles from './OrdersUpdate.module.css';

const OrdersUpdate = ({ setOrders }) => {

  const [order, setOrder] = useState({
    id: "",
    item: "",
    total: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  }

  const handleUpdate = () => {
    setOrders(prev => prev.map((e) => {
      if (e.id == order.id) {
        return order;
      } else {
        return e;
      }
    }))
    setOrder({
      id: "",
      item: "",
      total: ""
    })
  }

  return (
    <div className={styles.container}>
      <input name="id" value={order.id} type="text" placeholder="수정할 ID" onChange={handleChange} />
      <input name="item" value={order.item} type="text" placeholder="수정할 Item" onChange={handleChange} />
      <input name="total" value={order.total} type="text" placeholder="수정할 Total" onChange={handleChange} />
      <button onClick={handleUpdate}>수정</button>
    </div>
  )
}

export default OrdersUpdate;