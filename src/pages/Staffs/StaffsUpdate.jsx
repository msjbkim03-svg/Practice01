import { useState } from "react";
import styles from './StaffsUpdate.module.css';

const StaffsUpdate = ({ setStaffs }) => {

  const [staff, setStaff] = useState({
    id: "",
    name: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  }

  const handleUpdate = () => {
    setStaffs(prev => prev.map((e) => {
      if (e.id == staff.id) {
        return staff;
      } else {
        return e;
      }
    }))
    setStaff({
      id: "",
      name: "",
      phone: ""
    })
  }

  return (
    <div className={styles.container}>
      <input name="id" value={staff.id} type="text" placeholder="수정할 ID" onChange={handleChange} />
      <input name="name" value={staff.name} type="text" placeholder="수정할 Name" onChange={handleChange} />
      <input name="phone" value={staff.phone} type="text" placeholder="수정할 Phone" onChange={handleChange} />
      <button onClick={handleUpdate}>수정</button>
    </div>
  )
}

export default StaffsUpdate;