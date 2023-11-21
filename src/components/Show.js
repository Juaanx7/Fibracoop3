import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import { Swal } from 'sweetalert2'
import { withReactContent } from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = () => {
    // Configuramos los hooks
    const {clientes, setClientes} = useState( [] )

    // Referenciamos a la DB de Firestore
    const clientesCollection = collection(db, "clientes")
    // Funcion para mostrar todos los documentos
    const getClientes = async () => {
        const data = await getDocs(clientesCollection)
        console.log(data.docs) 
    }
    // Funcion para eliminar un documento

    // Funcion de confirmacion para SweetAlert

    // Usamos useEffects
    useEffect( () =>{
        getClientes()
    }, [] )
    // Devolcemos vista de nuestros componentes


return (
    <div>Show</div>
  )
}

export default Showfirstfirst