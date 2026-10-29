import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom";



const MenuIndex = () => {
  const navi = useNavigate();

  return (
    <div>
      <div>
        <div onClick={() => navi("/admin/menus/read")}>목록(Read)</div>
        <div onClick={() => navi("/admin/menus/create")}>등록(Create)</div>
        <div onClick={() => navi("/admin/menus/update")}>수정(Update)</div>
        <div onClick={() => navi("/admin/menus/delete")}>삭제(Delete)</div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MenuIndex;