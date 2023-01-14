import { addDoc, collection, getFirestore } from '@firebase/firestore'
import React from 'react' 
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import '../Formulario/Form.css'

export const Form = () => {

  const {  totalPrice, cartList, emptyCart } = useCartContext()
  const [ dataform, setFormData] = useState({
    name:'' ,
    email:'',
    email2:'',
    phone:''
  })

  const handleOnChange = (e) => {
    console.log('nombre del input',e.target.name)
    console.log('valor de el input',e.target.value)
    setFormData({
      ... dataform,
      [e.target.name]: e.target.value
    })
  }
  const addOrder = (e) => {
    e.preventDefault()

   const order = {}
   order.buyer = dataform
   order.precio = totalPrice()
   order.items = cartList.map( ( {id, precio, name } ) => ( {id, precio, name } ) )

   const db = getFirestore()
   const queryCollection = collection(db, 'orders')

   if(dataform.email !== dataform.email2)
   return(alert('Email no coincide mi rey, calale de nuevo'))

   addDoc(queryCollection, order)
   .then(resp => console.log(resp))
   .catch(err => console.log(err))
   .finally(() => emptyCart())
   }

return(
  <div>
       <form className= ' form-data row g-3 align-items-center' onSubmit={addOrder}>
       
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='name' 
                                  value={dataform.name}
                                  placeholder='Tu nombre'
                                  required
                                  />
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='phone' 
                                  value={dataform.phone}
                                  placeholder='Ingresa tu Numrero'
                                  required
                                  />
                              <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email' 
                                  value={dataform.email}
                                  placeholder='Ingresa tu email'
                                  required
                                  />
                                  <input 
                                  type="text" 
                                  onChange={handleOnChange} 
                                  name='email2' 
                                  value={dataform.email2}
                                  placeholder='Confirma tu email'
                                  required
                                  />
                                  
                                  
                                  
                                    <button className="fp-button  btn btn-danger mt-4 ">Finalizar y Pagar</button>
                                  
                                  
                              

                            </form>
  </div>
)
  
}


