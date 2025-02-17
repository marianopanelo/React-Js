import { useEffect, useState } from "react";

const useFetchData = (http) => {
    const [datoTraido, setDatos] = useState([]);

    useEffect(() => {
        fetch(http)
            .then((res) => res.json())
            .then((res) => setDatos(res))
            .catch((error) => console.log(error));
    }, [http]);

    const crearUsuario = (datosPasados) => {
        fetch(http, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datosPasados),
        })
        .then((res) => res.json())
        .then((data) => console.log("Usuario creado:", data))
        .catch((error) => console.log("Error al crear usuario:", error));
    };

    const updateUser = (id, DatoAModificar, datoModificado) => {
        fetch(`${http}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ [DatoAModificar]: datoModificado }),
        })
        .then((res) => res.json())
        .then((data) => console.log("Usuario actualizado:", data))
        .catch((error) => console.log("Error al actualizar usuario:", error));
    };

    const deleteUser = (id) => {
        fetch(`${http}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => console.log(`Usuario con ID ${id} eliminado.`))
        .catch((error) => console.log("Error al eliminar usuario:", error));
    };

    return { data: datoTraido, status: 200, message: "un msj", crearUsuario, updateUser, deleteUser };
};

export default useFetchData;