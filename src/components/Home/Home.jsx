import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../actions';
import "./home.module.css"


export default function Home() {


    const[hasMore, setHasMore] = useState(false)
    const dispatch = useDispatch()
    const listadoEmpresas = useSelector(state => state.empresas)
    // let otraPosicion = []
    // let temporal = localStorage.getItem('empresas')
    const [inicio, setInicio] = useState(1)
    // const [empresas, setEmpresas] = useState(20);
    // const  ultimaEmp = inicio * empresas;
    // const primerEmp = ultimaEmp - empresas;
    // const posicion = listadoEmpresas.slice(primerEmp, ultimaEmp);
    // const otraPosicion = [].concat(posicion)
    // console.log('otraPosicion', otraPosicion)
    // localStorage.setItem('empresas', posicion)
    // console.log('temporal', temporal)
    // otraPosicion = [...otraPosicion, ]

    useEffect(() => {
        dispatch(getItems());
       }, [dispatch] )

  return (
   
        
            <div style={{display: "flex", justifyContent: "center"}}>

            <table summary='Registro de Empresas' >
                <caption>
                   
                </caption>
                <thead>
                <tr>
                    <th scope='col' >
                        Nombre 
                    </th>
                    <th scope='col' >
                        Razon Social 
                    </th>
                    <th scope='col' >
                        Nit 
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                        listadoEmpresas?.map(e =>{
                            return(
                                <tr key={e.nombre.stringValue + Math.random(0,1)}>       
                                  <th scope='row'>{e.nombre.stringValue}</th>
                                  <td>{e.razonSocial.stringValue}</td> 
                                  <td>{e.nit.stringValue}</td> 
                                </tr>
                            )})
                        }

                </tbody>
                </table>
         </div>

  )
}


