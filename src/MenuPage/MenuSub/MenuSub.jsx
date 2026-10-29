

const MenuSub = ({menus}) => {


    return (
        <table border={1}>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>price</td>
            </tr>
            {
                menus.map((e,i) => (
                    <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                    </tr>
                ))
            }
        </table>
    );
};

export default MenuSub;