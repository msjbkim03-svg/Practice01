import { Outlet } from 'react-router-dom';
import styles from './StaffsIndex.module.css';
import { useNavigate } from 'react-router-dom';

const StaffsIndex = () => {
  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div onClick={() => navi("/admin/staffs/read")}>목록(Read)</div>
        <div onClick={() => navi("/admin/staffs/create")}>등록(Create)</div>
        <div onClick={() => navi("/admin/staffs/update")}>수정(Update)</div>
        <div onClick={() => navi("/admin/staffs/delete")}>삭제(Delete)</div>
      </div>
      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  )
}

export default StaffsIndex;