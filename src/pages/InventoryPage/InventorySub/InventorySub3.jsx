import { useState } from "react";


const InventorySub3 = () => {

    const [update,setUpdate] = useState({
        id: "",
        name: "",
        stock: ""
    });

    const handleUpdate = (e) => {
        const {name, value} = e.target;
        setUpdate(prev => ({...prev, [name]: value}));
    }

    return (
        <div>
            <input type='text' name="id" placeholder='수정할 id 입력' onChange={e => setUpdate(e.target.value)} onClick={update} /><br></br>
            <input type='text' name="name" placeholder='수정할 name 입력' onChange={e => setUpdate(e.target.value)} onClick={update}/><br></br>
            <input type='text' name="stock" placeholder='수정할 stock 입력' onChange={e => setUpdate(e.target.value)} onClick={update}/><br></br>
            <button onClick={handleUpdate}>저장</button>
        </div>
    );
};

export default InventorySub3;