import React, { Fragment } from 'react'
import { useForm } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const Formulario = () => {

    const validacion = Yup.object().shape({

        titulo: Yup.string().required("Requiere Titulo"),
        nombres: Yup.string().required("Nombres Requerido"),
        apellidos: Yup.string().required("Apellidos Requeridos"),
        cumple: Yup.string().required("Fecha de Cumpleaños Requerida").
            matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Fecha valida en formato YYYY-MM-DD'),
        email: Yup.string().required("Email es Requerido").email("Email es Invalido"),
        password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("Password es Requerido"),
        confpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Los Password deben Coincidir")
            .required("Confirmar Password es Requerido"),
        aceptar: Yup.bool().oneOf([true], 'Aceptar Terminos es Requerido')
    })

    const formvalidar = { resolver: yupResolver(validacion) }
    const { register, handleSubmit, reset, formState } = useForm(formvalidar)
    const { errors } = formState

    const onSubmit = (data) => {

        alert(JSON.stringify(data))
        return false
    }

    return (


        <Fragment>
            <div class="container">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Titulo</label>
                    <select name="titulo" {...register('titulo')} className={`form-control ${errors.titulo ? 'is-invalid' : ''}`}>
                        <option value=""></option>
                        <option value="Señor">Mr</option>
                        <option value="Señora">Mrs</option>
                        <option value="Señorita">Miss</option>
                    </select>
                    <div className="invalid-feedback">{errors.titulo?.message}</div>
                    <input name="nombres" type="text" {...register('nombres')} className={`form-control ${errors.nombres ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.nombres?.message}</div>
                    <input name="apellidos" type="text" {...register('apellidos')} className={`form-control ${errors.apellidos ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.apellidos?.message}</div>
                    <input name="cumple" type="date" {...register('cumple')} className={`form-control ${errors.cumple ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.cumple?.message}</div>
                    <input name="email" type="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                    <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                    <input name="confpassword" type="password" {...register('confpassword')} className={`form-control ${errors.confpassword ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.confpassword?.message}</div>
                    <div className="form-group form-check">
                        <input name="aceptar" type="checkbox" {...register('aceptar')} id="acceptTerms" className={`form-check-input ${errors.aceptar ? 'is-invalid' : ''}`} />
                        <label htmlFor="aceptar" className="form-check-label">Acepto Terminos y Condiciones</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                   
                    <button type="submit" className="btn btn-primary btn-block">Guardar</button>
                    <button type="button" onClick={() => reset()} className="btn btn-secondary">Resetear</button>
                </form>

            </div>
        </Fragment>
    )
}

export default Formulario
