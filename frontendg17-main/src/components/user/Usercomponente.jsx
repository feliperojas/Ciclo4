import React from 'react'
import { consumirApiUser } from '../../assets/js/api'
import { useForm} from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const Usercomponente = () => {

    const validacion = Yup.object().shape({

        id: Yup.string().required("Requiere Id"),
        identification: Yup.string().required("Requiere Identificación"),
        name: Yup.string().required("Requiere Nombre"),
        birthtDay: Yup.string().required("Fecha de Cumpleaños Requerida").
            matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Fecha valida en formato YYYY-MM-DD'),
        address: Yup.string().required("Requiere Dirección"),
        cellPhone: Yup.string().required("Requiere Numero de Contacto"),
        email: Yup.string().required("Requiere Email").email("Email Invalido"),
        password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("Password es Requerido"),
        confpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Los Password deben Coincidir")
            .required("Confirmar Password es Requerido"),
        zone: Yup.string().required("Requiere Zona"),
        type: Yup.string().required("Requiere Tipo"),

    })

    const formvalidar = {resolver:yupResolver(validacion)}
    const {register,handleSubmit,reset,formState}=useForm(formvalidar)
    const {errors} = formState

    const guardar = (data) => {

        const objuser = {
            id: data.id,
            identification: data.identification,
            name: data.name,
            birthtDay: data.birthtDay,
            monthBirthtDay: mesNacimiento(data.birthtDay),
            address: data.address,
            cellPhone: data.cellPhone,
            email: data.email,
            password: data.password,
            zone: data.zone,
            type: data.type
        }
        const resp = consumirApiUser(objuser)
        resp.then(respserv =>{
            if(respserv.status===201){
                alert("Guardo con Exito!!")
            }
            else{
                alert("Problemas al Guardar")
            }

        })

    }

    const mesNacimiento=(birthtDay)=>{

        const fecha = new Date(birthtDay)
        return (fecha.getMonth())?`0${fecha.getMonth()+1}`:(fecha.getMonth()+1)

    }

    return (
        <div className="container jumbotron mt-1">
            <form onSubmit={handleSubmit(guardar)}>
                <h1 className="text-center mt-5 mb-3">Guardar Usuario</h1>
                <label>Id</label>
                <input name="id" type="text" {...register("id")} 
                 className={`form-control ${errors.id?'is-invalid':''}`}/>
                 <div className='invalid-feedback'>{errors.id?.message}</div>
                 <label>Identificación</label>   
                 <input name="identification" type="text" {...register("identification")} 
                 className={`form-control ${errors.identification?'is-invalid':''}`}
                 />
                 <div className='invalid-feedback'>{errors.identification?.message}</div>
                 <label>Nombre</label>
                 <input name="name" type="text" {...register("name")}
                 className={`form-control ${errors.name?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.name?.message}</div>

                 <label>Fecha de Nacimiento</label>
                 <input name="birthtDay" type="date" {...register("birthtDay")}
                 className={`form-control ${errors.birthtDay?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.birthtDay?.message}</div>

                 <label>Dirección</label>
                 <input name="address" type="text" {...register("address")}
                 className={`form-control ${errors. address?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.address?.message}</div>

                 <label>Numero de Contacto</label>
                 <input name="cellPhone" type="text" {...register("cellPhone")}
                 className={`form-control ${errors.cellPhone?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.cellPhone?.message}</div>

                 <label>Email</label>
                 <input name="email" type="email" {...register("email")}
                 className={`form-control ${errors.email?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.email?.message}</div>

                 <label>Password</label>
                 <input name="password" type="password" {...register("password")}
                 className={`form-control ${errors.password?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.password?.message}</div>    

                 <label>Confirmar Password</label>
                 <input name="confpassword" type="password" {...register("confpassword")}
                 className={`form-control ${errors.confpassword?'is-invalid':''}`}   
                 />
                 <div className='invalid-feedback'>{errors.confpassword?.message}</div> 

                 <label>Zona</label>
                 <select name="zone" {...register("zone")}
                 className={`form-control ${errors.zone?'is-invalid':''}`}
                 >
                     <option value=""></option>
                     <option value="Zona 1">Zona 1</option>
                     <option value="Zona 2">Zona 2</option>
                 </select>
                 <div className='invalid-feedback'>{errors.zone?.message}</div>

                 <label>Tipo</label>
                 <select name="type" {...register("type")}
                 className={`form-control ${errors.type?'is-invalid':''}`}
                 >
                     <option value=""></option>
                     <option value="Tipo 1">Tipo 1</option>
                     <option value="Tipo 2">Tipo 2</option>
                 </select>
                 <div className='invalid-feedback'>{errors.type?.message}</div>
                 
                <div className="text-center mt-3">
                     <button type="submit" className='btn btn-primary mr-2'>Guardar</button>
                     <button type='button' className='btn btn-warning' onClick={(e)=>{reset()}}>Limpiar</button>
                </div>

            </form>          

        </div>
    )
}

export default Usercomponente
