import { useState } from "react";
import styles from './StaffsCreate.module.css';

const StaffsCreate = ({ setStaffs }) => {
  const [staff, setStaff] = useState({
    id: "",
    name: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  }

  const handleCreate = (e) => {
    setStaffs(prev => [...prev, staff]);
    setStaff({
      id: "",
      name: "",
      phone: ""
    });
  }

  return (
    <div className={styles.container}>
      <input name="id" value={staff.id} type="text" placeholder="Input new Id" onChange={handleChange} />
      <input name="name" value={staff.name} type="text" placeholder="Input new Name" onChange={handleChange} />
      <input name="phone" value={staff.phone} type="text" placeholder="Input new Phone" onChange={handleChange} />
      <button onClick={handleCreate}>등록</button>
    </div>
  );
}

export default StaffsCreate;