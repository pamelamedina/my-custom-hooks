import {useState} from 'react'

export default function useArray(defaultValue) {
   const [array , setArray] = useState(defaultValue);
 
   function push(element) {
       setArray(a => [ ...a, element])
   }

   function filter(callback) {
       setArray(a => a.filter(callback))
   }
    
   function update(index, newElement) {
           setArray(a => {
               const newArray = [...a]
               newArray.splice(index, 0 , newElement)
               return(newArray)
           })        
   }

   function remove(index) {
       setArray(a =>
                 [...a.slice( 0, index ),
                 ...a.slice(index + 1, a.length -1)]  
               )
   }

   function clear() {
       setArray([]);
   }  
   
   function sortA() {
       setArray(a => {
            const newArray = [...a]
            newArray.sort(function(x,y){return x-y})
            return(newArray)
       })
   }

   function sortD() {
    setArray(a => {
         const newArray = [...a]
         newArray.sort(function(x,y){return y-x})
         return(newArray)
    })
  }

  function processWithFunction(func) {
    setArray( a => {
      const newArray = [];
      for (let i =0 ; i < a.length ; i++){
          newArray[i] = func(a[i])
      } 
      return(newArray)   
    })
   }
 return {array , set:setArray, push, filter, update, remove, clear, sortA, sortD, processWithFunction }
}




