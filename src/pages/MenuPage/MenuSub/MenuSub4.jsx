

const Sub4 = () => {

    const [deltarget,setDeltarget] = useState("");

    const handleDelete = () => {
        setMenus(menus.filter(e => e.id != Number(deltarget)));
        setDeltarget("");
    }

    return (
        <input type="text" placeholder="삭제할 id" onChange={e => {setDeltarget(e.target.value)}} />
    )
}