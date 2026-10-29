import { Outlet } from "react-router-dom"

const MenuIndex = () => {
  return (
    <div>
      <div>
        <div>목록(Read)</div>
        <div>등록(Create)</div>
        <div>수정(Update)</div>
        <div>삭제(Delete)</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MenuIndex;