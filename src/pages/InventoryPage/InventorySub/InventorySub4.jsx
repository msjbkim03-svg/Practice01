import { useState } from "react";


const InventorySub4 = ({setStocks}) => {

    const [deltarget,setDeltarget] = useState("");
    
        const handleDelete = () => {
            setStocks(prev => prev.filter(e => e.id != Number(deltarget)));
            setDeltarget("");
        }

    return (
        <div>
            <input type="text" placeholder="삭제할 id" onChange={e => setDeltarget(e.target.value)} value={deltarget} />
            <button onClick={handleDelete}>삭제</button>
        </div>
    );
};

export default InventorySub4;