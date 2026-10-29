import { useNavigate } from "react-router-dom";


const InventoryIndex = () => {

  const navi = useNavigate();

  return (
    <div>
      <div>
        <div onClick={()=> {navi("/admin/inventory/read")}}>목록(Read)</div>
        <div onClick={()=> {navi("/admin/inventory/create")}}>등록(Create)</div>
        <div onClick={()=> {navi("/admin/inventory/update")}}>수정(Update)</div>
        <div onClick={()=> {navi("/admin/inventory/delete")}}>삭제(Delete)</div>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default InventoryIndex;