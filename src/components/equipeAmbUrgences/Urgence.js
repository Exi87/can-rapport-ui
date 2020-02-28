import React, {useContext, useEffect,Fragment} from 'react'

import UrgenceContext from "../../context/urgence/urgenceContext"

import UrgenceItem from './UrgenceItem'



 const Urgence = () => {
     const urgenceContext= useContext(UrgenceContext)
  
     const { urgences, getUrgence, filtered, dateUrgence} = urgenceContext
   
     useEffect(()=>{
        getUrgence()
       
    // eslint-disable-next-line
    }, [])

    console.log(filtered);
    

    return (
        
        <Fragment>

            {filtered !==null ? filtered.map(urgence=>(<UrgenceItem key={urgence.id} urgence={urgence}/>)
            
            ):urgences.map(urgence=><UrgenceItem key={urgence.id} urgence={urgence}/>) }
           
        </Fragment>  

      
    )
}

export default Urgence
