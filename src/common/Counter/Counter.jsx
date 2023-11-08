
import React, { useState, useEffect } from 'react'
import './Counter.css'


export const Counter = ({intervalo}) => {

    //Variable enganchada al Hook mediante useState
    const [value, setValue] = useState(0);

    // useEffect(()=>{
    //     //Este useEffect SÓLO se ejecuta la PRIMERA vez que se monta el componente
    // },[]);

    // useEffect(()=>{
    //     //Este useEffect se ejecuta SIEMPRE que se actualice el componente.
    // });

    useEffect(()=>{
        //Este useEffect se ejecutará SIEMPRE que cambie el valor de value.

        console.log(`Soy value y mi contenido es.... ${value}`);
    },[value]);



     return (
         <div className='counterDesign'>
            <div onClick={()=>setValue(value+intervalo)}>+</div>
            <div>{value}</div>
            <div onClick={()=>setValue(value-intervalo)}>-</div>
         </div>
     )
}