import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createItem } from '../../actions';

export default function Form(name) {
    
    let nameRegis = !name.nombre ? "" : name.nombre
    const [empresa, setEmpresa] = useState({
        nombre: nameRegis,
        razonSocial: "",
        nit: "",
        telefono: "",
        codigo : "",
    })
    console.log('empresa :>> ', empresa);
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


    <form onSubmit={e => handleSubmit(e)}>
             
        <label>Nombre:</label>
        <input type="text" value={empresa.nombre} name="nombre" onChange={e => handleChange(e)} ></input>

        <label>Razon Social:</label>
        <input type="text" name="razonSocial" onChange={e => handleChange(e)} ></input>

        <label>Nit:</label>
        <input type="number" name="nit" onChange={e => handleChange(e)} ></input>

        <label>Telefono:</label>
        <input type="number" name="telefono" onChange={e => handleChange(e)} ></input>

        <label>Codigo:</label>
        <input type="number" name="codigo" onChange={e => handleChange(e)} ></input>


        <button type="submit">Registrar Empresa</button>

    </form>
  )
}
