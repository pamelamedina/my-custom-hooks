import React from 'react'
import useArray from './useArray'

export default function ArrayComponent () {
    const {array, set, push, filter, update,
          remove, clear, sortA, sortD, 
          processWithFunction } 
          = useArray([0,1,2,3,4,5,6,7,8]) 
    return(
           <div>               
               <div>My Array:{"  "} {array.join(",")}</div>                
               <button onClick={() => push(9)}>Push 9 </button>
               <button onClick={() => remove(1)}>Remove Element at Index 1</button>
               <button onClick={() => update(5,33)}>Insert 33 in index 5</button>
               <button onClick={() => filter(a=> a !== 33)}>remove all 33's</button>
               <button onClick={() => clear() }>Clear</button>
               <button onClick={() => set([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])}>Set Arry to 0-15</button>
               <button onClick={() => sortA()}>SORT ASCENDING</button>
               <button onClick={() => sortD()}>SORT DECENDING</button>
               <button onClick={() => processWithFunction(a => a*2)}  >Multiply by 2</button>
               <button onClick={() => processWithFunction(a => Math.pow(a,2))} >Power of 2</button>
               <button onClick={() => processWithFunction(a => Math.pow(a,3))} >Power of 3</button>                              
           </div>
    )
}