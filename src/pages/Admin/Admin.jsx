import styles from './Admin.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>매장 관리 시스템</p>
        <button>로그아웃</button>
      </div>
      <div className={styles.body}>
        <div className={styles.menu}>
          <div>대시보드</div>
          <div onClick={()=>{navi("/admin/menus")}}>메뉴관리</div>
          <div onClick={()=>{navi("/admin/inventory")}}>재고관리</div>
          <div onClick={() => {navi("/admin/orders")}}>주문관리</div>
          <div>직원관리</div>
        </div>
        <div className={styles.contents}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;