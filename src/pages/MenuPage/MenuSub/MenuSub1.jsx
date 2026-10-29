

const MenuSub1 = ({menus}) => {


    return (
        <table border={1}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>price</td>
                </tr>
            </thead>
            <tbody>
                {
                    menus.map((e,i) => (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default MenuSub1;