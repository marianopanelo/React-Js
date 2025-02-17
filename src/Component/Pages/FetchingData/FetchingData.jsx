import useFetchData from "../../../hooks/useFech";

const FetchingData = () => {
    const { data, crearUsuario, updateUser, deleteUser } = useFetchData("https://jsonplaceholder.typicode.com/users");
    
    const datosUsuarios = {
        name: "Mariano"
    };

    console.log(data);
    
    return (
        <div>
            <button onClick={() => crearUsuario(datosUsuarios)}>Crear usuario</button>
            {data.map((user) => (
                <div key={user.id}>
                    <h2>
                        {user.name} - {user.username}
                    </h2>
                    <button onClick={() => updateUser(user.id,user.name,"mariano")}>Actualizar usuario</button>
                    <button onClick={() => deleteUser(user.id)}>Eliminar usuario</button>
                </div>
            ))}
            <p>FetchingData</p>
        </div>
    );
};

export default FetchingData;
