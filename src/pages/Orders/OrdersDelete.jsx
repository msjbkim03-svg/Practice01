import { useState } from 'react';
import styles from './OrdersDelete.module.css'

const OrdersDelete = ({setOrders}) => {
  const [target, setTarget] = useState("");

  const handleChange = (e) => {
    setTarget(e.target.value);
  }

  const handleDelete = () => {
    setOrders(prev => prev.filter(e => {
      return e.id != target;
    }))
    setTarget("");
  }

  return (
    <div className={styles.container}>
      <input value={target} type="text" placeholder="삭제할 ID" onChange={handleChange} />
      <button onClick={handleDelete}>삭제</button>
    </div>
  )
}

export default OrdersDelete;