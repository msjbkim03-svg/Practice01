import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navi = useNavigate();

  return (
    <div className={styles.container}>
      <span>매장 관리 시스템 로그인</span>
      <input type="text" placeholder="Input ID"></input>
      <input type="text" placeholder="Input PW"></input>
      <button onClick={() => {navi("/admin")}}>Login</button>
    </div>
  )
}
export default Login;