import styles from './StaffsRead.module.css';

const StaffsRead = ({ staffs }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {
            staffs.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default StaffsRead;