

const InventorySub = ({stocks}) => {

    return (
        <table border={1}>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>stock</td>
            </tr>
            {
                stocks.map((e,i)=>(
                    <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.stock}</td>
                    </tr>
                ))
            }
        </table>
    )
}

export default InventorySub;