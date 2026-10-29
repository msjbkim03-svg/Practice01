import { Link,Outlet } from "react-router-dom"


const Inventory = () =>
  <div className="Container">

    <div className="a">
      <p>매장 관리 시스템</p>
      <button>로그아웃</button>
    </div>


    <div className="SubContainer1">
        <Link to="sub1"><span>대시보드</span></Link>
        <Link to="sub2"><span>메뉴관리</span></Link>
        <Link to="sub3"><span>재고관리</span></Link>
        <Link to="sub3"><span>주문관리</span></Link>
        <Link to="sub3"><span>직원관리</span></Link>
    </div>

    <div className="SubContainer2">
        <Link to="sub1"><span>목록</span></Link>
        <Link to="sub2"><span>등록</span></Link>
        <Link to="sub3"><span>수정</span></Link>
        <Link to="sub3"><span>삭제</span></Link>
    </div>

    <div className="content">
        <Outlet />
    </div>

    </div>


  export default Inventory;