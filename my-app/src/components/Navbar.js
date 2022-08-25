import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
//import { useState, useEffect } from 'react'
//import { getinitialMovies } from '../const/initialMovies'
//import { response } from 'express'
//import initialMovies from '../const/initialMovies'
const Navbar = () => {
      
   // useEffect(()=>{
     //   getinitialMovies().then(response=>{
       //     initialMovies(response)
       // })
    // }
    // )
    console.log('Navbar')

    const { user, login, logout } = useContext(UserContext);

    return (
        <nav style={{display:'flex' , justifyContent:'space-around', alignItems:'center'}}>
            <div className="container">
                <span className="navbar-brand">
                    <h2>{ user ? `Hola ${user.name}` : 'Bienvenid@'}</h2> 
                </span>
                
                <a href='/' className='site-title'>PIPIPINA MOVIES</a>
                <ul>
                    
                        <button>ALQUILER</button>
                       <button>COMPRA</button>
                       <button>DEVOLUCION</button>
                    
                </ul>
                <div>
                 <h1>PELICULAS DESTACADAS DEL MES</h1>
              
                </div>
                { user 
                    ? <button className="btn btn-primary" onClick={logout}>
                        Cerrar Sesión
                      </button>
                    : <button className="btn btn-primary" onClick={login}>
                        Iniciar Sesión
                      </button>
                }
            </div>
        </nav>
    )
}

export default Navbar