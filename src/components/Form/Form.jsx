import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createItem } from '../../actions';
import style from "./form.module.css";


export default function Form(name) {
    
    let nameRegis = !name.nombre ? "" : name.nombre
    const [empresa, setEmpresa] = useState({
        nombre: nameRegis,
        razonSocial: "",
        nit: "",
        telefono: "",
        codigo : "",
    })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createItem(empresa))
    setEmpresa({
        nombre:"",
        razonSocial: "",
        nit: "",
        telefono: "",
        codigo : "",
    })
  }

  const handleChange = (e) =>{
    setEmpresa({
    ...empresa,
    [e.target.name] : e.target.value
    })
  }



  return (


    <form className={style.form} onSubmit={e => handleSubmit(e)}>
             
        <label>Nombre:</label>
        <input type="text" value={empresa.nombre} name="nombre" required onChange={e => handleChange(e)} ></input>

        <label>Razon Social:</label>
        <input type="text" name="razonSocial" required onChange={e => handleChange(e)} ></input>

        <label>Nit:</label>
        <input type="number" name="nit" required min={0} onChange={e => handleChange(e)} ></input>

        <label>Telefono:</label>
        <input type="number" name="telefono" required min={0} onChange={e => handleChange(e)} ></input>

        <label>Codigo:</label>
        <input type="number" name="codigo" required min={0} onChange={e => handleChange(e)} ></input>


        <button className={style.regis} type="submit">Registrar Empresa</button>

    </form>
  )
}
