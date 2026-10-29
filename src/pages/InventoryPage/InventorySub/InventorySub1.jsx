
const InventorySub1 = ({stocks}) => {

    return (
        <table border={1}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>stock</td>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((e,i)=>(
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.stock}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default InventorySub1;
