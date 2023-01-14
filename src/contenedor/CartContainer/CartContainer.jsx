import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import  {Form}  from  '../../components/Formulario/Form'
import { useCartContext } from '../../context/CartContext'
import '../CartContainer/CartContainer.css'

const CartContainer = () => {
  const { cartList, emptyCart, totalPrice, itemDelet } = useCartContext();
      //  useEffect(()=>{
      //               if (id) {
      //                   CartContainer()
      //                   .then(data => setProduct(data.filter(prod => prod.categoria === id)))
      //                   .catch(err => console.log(err))
      //                   .finally(()=> setLoading(false))      
                        
      //               } else {
      //                   CartContainer()
      //                   .then(data => setProduct(data))
      //                   .catch(err => console.log(err))
      //                   .finally(()=> setLoading(false))            
      //               }    
      //               }, [id])
      //               console.log(CartContainer)

  return (
    <div className='objet-items'>
      { cartList.length !== 0 ?  
      
      <> 
     { cartList.map(prod => <div key={prod.id}>
                              <div className='item-shopping'>
                             <img src={prod.foto} alt="" className='mt-2'/>

                             </div >
                             Nombre: {prod.name} - Categoria: {prod.categoria} - Precio: $ {prod.precio} - Cantidad: {prod.cant}
                             <button onClick={ () => itemDelet(prod.id) }>Eliminar Juguete</button>
                              </div>
                              
                              )
}
                            <h4 className='mb-3'>Total a Pagar : $ { totalPrice() }</h4>

                            <Form />


                            <button className="empty-cart btn btn-danger mt-5 ml-5" onClick={ emptyCart}>Vaciar Carrito</button>

                            
      
      </>
          
      :
      <>
        <h2 className='empty-cart-alert '>Carrito Vacio Jugueton</h2>
        <Link to='/category/Juguetes para niño' className='galery-router text-light'>Ver Galerias</Link>
      </>
}    
    </div>
    
  )
}

export default CartContainer
