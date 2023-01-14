
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    
    <section className="container " style={{ marginLeft: 23}}>
      <Link to='/category/Juguetes para niño'>
              <img src="https://img.freepik.com/vector-premium/tienda-juguetes-clasicos-vintage-horse-retro-label-badge-diseno-logotipo_560919-82.jpg?w=2000" alt="" />
      </Link>
      

      <div>
       <ul className="Category">
        <NavLink to='/category/Juguetes para niño'>
          <li><a>Juguetes para niño</a></li>
        </NavLink>

        <NavLink to='/category/Juguetes para niña'>
           <li><a>Juguetes para niña</a></li>
           </NavLink>
         
         <NavLink to='/category/Juguetes en Oferta'>
           <li><a>Ofertas hasta un 40%</a></li>
         </NavLink>
          
          <NavLink to='/category/Proximos Lansamientos'>
            <li><a>Proximos lansamientos</a></li>
          </NavLink>
          
        </ul>    
      </div>  

              
                <NavLink style={{ marginLeft: 300}} className='btn btn-outline-primary' to='/cart'>
                  <CartWidget />
                </NavLink>
              
    </section>
  )
}

export default NavBar
