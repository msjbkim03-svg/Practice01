import { Outlet } from 'react-router-dom';
import styles from './OrdersIndex.module.css';
import { useNavigate } from 'react-router-dom';

const OrdersIndex = () => {
  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div onClick={() => navi("/admin/orders/read")}>목록(Read)</div>
        <div onClick={() => navi("/admin/orders/create")}>등록(Create)</div>
        <div onClick={() => navi("/admin/orders/update")}>수정(Update)</div>
        <div onClick={() => navi("/admin/orders/delete")}>삭제(Delete)</div>
      </div>
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  )
}

export default OrdersIndex;