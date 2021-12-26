import React, { useEffect, useState } from 'react'
import { consumirApiUserGet } from '../../assets/js/api'
const Mostrarcomponente = () => {

    const [data, setData] = useState([])
    useEffect(() => {

        const resp = consumirApiUserGet()
        resp.then(data => {
            setData(data.data)
        })


    }, []);

    return (


        <div className="container">
            <h1 className="mt-5 mb-3 text-center">Lista de Usuario</h1>
            <table className="table table-stripped text-center">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Identificación
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Fecha de Cumpleaños
                        </th>
                        <th>
                            Mes de Cumpleaños
                        </th>
                        <th>
                            Dirección
                        </th>
                        <th>
                            Telefono
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Zona
                        </th>
                        <th>
                            Tipo
                        </th>

                    </tr>
                </thead>

                <tbody>
                    {
                        
                        data.map(user=>
                            
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.identification}</td>
                                    <td>{user.name}</td>
                                    <td>{user.birthtDay}</td>
                                    <td>{user.monthBirthtDay}</td>
                                    <td>{user.address}</td>
                                    <td>{user.cellPhone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.zone}</td>
                                    <td>{user.type}</td>

                                </tr>
                            
                            )

                    }
                </tbody>

            </table>


        </div>
    )
}

export default Mostrarcomponente
