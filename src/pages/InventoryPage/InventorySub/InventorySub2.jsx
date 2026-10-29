import { useState } from 'react';

const InventorySub2 = ({setStocks}) => {

  const [newInventory,setnewInventory] = useState({
    id: "",
    name: "",
    stock: ""
  })

  const handelChange = (e => {
    const {name,value} = e.target;
    setnewInventory(prev => ({...prev, [name]:value}))
  })

  const Add = () => {
    setStocks(prev => [...prev,newInventory]);
    setnewInventory({id: "",name: "",stock: ""});
  }
    return (
         <div align="center">
            <input type="text" name="id" placeholder="id" onChange={handelChange} value={newInventory.id} /><br />
            <input type="text" name="name" placeholder="name" onChange={handelChange} value={newInventory.name} /><br />
            <input type="text" name="stock" placeholder="stock" onChange={handelChange} value={newInventory.stock} /><br />
            <button onClick={Add}>등록</button>
        </div>
    )
}

export default InventorySub2;