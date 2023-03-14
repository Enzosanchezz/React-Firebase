import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
export const db = getFirestore();

 
export function getItems (payload){
    return async function(dispatch){
        let empresa = [];
        const colRef = collection(db, 'empresas');
        const result = await getDocs(query(colRef));
        result.docs.map(d => empresa.push(d._document.data.value.mapValue.fields));
        return dispatch({
            type: "GETITEMS",
            payload : empresa
        })
    }
}

export function createItem(obj){
    return async function(dispatch){
        try {
            const colRef = collection(db, 'empresas');
            const data = await addDoc(colRef, obj);
            if(data.id){
                Swal.fire({
                    icon: 'success',
                     title: 'Si!',
                     text: 'Empresa registrada',
                })
                localStorage.clear();
            }
            return dispatch({
                type : "CREATEITEMS",
                payload : data.id
                })
        } catch (error) {
            console.log('error :>> ', error);
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oh no!',
            //     text: 'Empresa no registrada',
            //   })
        }
    }
}

export function getItemsBy(name, parameter) {
    return async function(dispatch){
    try {
        let empresa = [];
        const colRef = collection(db, 'empresas');
        const result = await getDocs(query(colRef, where(parameter, '==', name)));
        result.docs.map(d => empresa.push(d._document.data.value.mapValue.fields));
        if(result.empty){
            Swal.fire({
                icon: 'error',
                title: 'Oh no!',
                text: 'Empresa no registrada',
              })
        } 
        return dispatch({
            type: "GETITEMSBY",
            payload : empresa
        })

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oh no!',
            text: 'Elija un parametro de busqueda',
          })
    }
   
    }
}


