

const MenuSub4 = () => {

    const [deltarget,setDeltarget] = useState("");

    const handleDelete = () => {
        setMenus(menus.filter(e => e.id != Number(deltarget)));
        setDeltarget("");
    }

    return (
        <div>
            <input type="text" placeholder="삭제할 id" onChange={e => setDeltarget(e.target.value)} value={deltarget} />
            <button onClick={handleDelete}>삭제</button>
        </div>
    )
}

export default MenuSub4;