import React from 'react';
import '../styles/heading.scss'
import {Link}from 'react-router-dom'
import {IoMdAdd}from 'react-icons/io'
const Heading = () => {
    return (
        <div>
            <div className='principal'>
               <Link to='/'> 
               <h5 className='text-gray-100 font-bold'>Task list</h5>
               </Link>
               
           
                <div className='principal-2'>
               <Link to='/add'>    
             <button className='principal-2-boton'>
                 <IoMdAdd></IoMdAdd>
                  Add Task
              </button>  
              </Link>
            </div>
         </div>

        </div>
    );
}

export default Heading;
