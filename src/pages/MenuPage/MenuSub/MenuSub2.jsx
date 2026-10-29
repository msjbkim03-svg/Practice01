

const Sub2 = () => {

  const [newMenu,setnewMenu] = useState({
    id: "",
    name: "",
    price: ""
  })

  const handelChange = (e => {
    const {name,value} = e.target;
    setnewMenu(prev => ({...prev, [name]:value}))
  })

  const Add = () => {
    setMenus(prev => [...prev,newMenu]);
    setnewMenu({id: "",name: "",price: ""});
  }
    
  return (
      <div align="center">
        <input type="text" name="id" placeholder="id" onChange={handelChange} value={newMenu.id} /><br />
        <input type="text" name="name" placeholder="name" onChange={handelChange} value={newMenu.name} /><br />
        <input type="text" name="price" placeholder="price" onChange={handelChange} value={newMenu.price} /><br />
        <button onClick={Add}>등록</button>
      </div>
    );
  };

  export default Sub2;