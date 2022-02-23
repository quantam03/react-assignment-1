import React from 'react'

const Function = () => { 
    const inlinecss = {
        fontsize:'20px',
        color:'red',
        fontweight:'none'
        
    }
  return (
    <div className='box box1'>
            <h1>This is created using Function Component </h1> 
      
            <p className='external'>This is created using external CSS</p>
           <p style={inlinecss}>This is created using inline CSS</p>
            
            
            </div>
  )
}

export default Function