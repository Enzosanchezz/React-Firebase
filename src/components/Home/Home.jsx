import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../actions';


export default function Home() {


    const[hasMore, setHasMore] = useState(true)
    const dispatch = useDispatch()
    const listadoEmpresas = useSelector(state => state.empresas)
    // let otraPosicion = []
    // let temporal = localStorage.getItem('empresas')
    const [inicio, setInicio] = useState(1)
    const [empresas, setEmpresas] = useState(20);
    const  ultimaEmp = inicio * empresas;
    const primerEmp = ultimaEmp - empresas;
    const posicion = listadoEmpresas.slice(primerEmp, ultimaEmp);
    const otraPosicion = [].concat(posicion)
    console.log('otraPosicion', otraPosicion)
    // localStorage.setItem('empresas', posicion)
    // console.log('temporal', temporal)
    // otraPosicion = [...otraPosicion, ]
    
    if(inicio == 2){
        setHasMore(false)
    }

    useEffect(() => {
        dispatch(getItems());
       }, [dispatch] )

  return (
    <>
       
        <InfiniteScroll
          dataLength={listadoEmpresas.length}
          next={() => {setInicio(inicio + 1)}}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
            {
        posicion?.map(e =>{
            return(
                <p key={e.nombre.stringValue + Math.random(0,1)} >{e.nombre.stringValue}</p>
            )})
         }
        </InfiniteScroll>
    </>
  )
}
