import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getItems, getItemsBy} from "../../actions";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import Swal from "sweetalert2";
import Modal from 'react-modal';
import Form from "../Form/Form";



export default function SearchBar(){
    const dispatch = useDispatch();
    const[name, setName] = useState("");
    const[parameter, setParameter] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    let nombreRegistro = localStorage.getItem("nombre")
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      }}

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
          dispatch(getItemsBy(name, parameter))
          localStorage.setItem("nombre", name )
        setName("")
    }

    function handleChange(e){
      if(e.value == "registro"){
        setIsOpen(true)
      }
        setParameter(e.value)
    }

    function handleCharger(e){
      e.preventDefault()
      dispatch(getItems())
    }
    function closeModal(){
      setIsOpen(false)
    }

    const options = [
        {
          value: "registro",
            label: "Registrar Empresa"
        },
        {
          value: "nombre",
            label: "Nombre"
        },
        {
          value: "razonSocial",
            label: "Razon Social"
        },
        {
          value: "nit",
            label: "Nit"
        },
        {
          value: "telefono",
            label: "Telefono"
        },
        {
          value: "codigo",
            label: "Codigo"
        }
      ];

    return(
        <div >

             <div>
              <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  ariaHideApp={false}
                  style={customStyles}
                  contentLabel="Example Modal"
              >
                  <h2>Registro</h2>
                  <button onClick={closeModal}>cerrar</button>
                  <div>Completa los campos por favor</div>
                  <Form
                  nombre = {nombreRegistro}
                  />
              </Modal>
            </div>
            <Dropdown options={options} onChange={e => handleChange(e)} placeholder="Select an option" />
            <button onClick={(e) => handleCharger(e)} >&nbsp;↻&nbsp;</button>
            <input name="busqueda" type="text" placeholder="Busca..." onChange={e => handleInput(e)}/>
            <button type="submit" onClick={e => {handleSubmit(e)}} >Buscar</button>


        </div>
    )
}