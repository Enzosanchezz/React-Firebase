import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where, getFirestore } from "firebase/firestore";
export const db = getFirestore();

// export const getItems= async ()  => {
//     let empresa = [];
//     const colRef = collection(db, 'empresas');
//     const result = await getDocs(query(colRef));
//     result.docs.map(d => empresa.push(d._document.data.value.mapValue.fields));
//     console.log('empresa :>> ', empresa);
//     return empresa;
// }

// export const createItem = async(obj) => {
//     console.log('obj :>> ', obj);
//     const colRef = collection(db, 'empresas');
//     const data = await addDoc(colRef, obj);
//     return data.id;
// }




