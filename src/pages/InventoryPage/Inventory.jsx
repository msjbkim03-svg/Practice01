import styles from './Admin.module.css';
import { Outlet } from 'react-router-dom';

const Inventory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>매장 관리 시스템</p>
        <button>로그아웃</button>
      </div>
      <div className={styles.body}>
        <div className={styles.menu}>
          <div>대시보드</div>
          <div>메뉴관리</div>
          <div>재고관리</div>
          <div>주문관리</div>
          <div>직원관리</div>
        </div>
        <div className={styles.contents}><Outlet /></div>
      </div>
    </div>
  );
}

export default Inventory;