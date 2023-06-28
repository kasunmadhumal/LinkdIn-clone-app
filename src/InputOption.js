import React from 'react'
import './InputOption.css'

function InputOption({Icon, title, color}) {
  return (
    <div className='inputOption'>
         <Icon style={color} />
         <div className="inputOption__text">
                <h4>{title}</h4>
         </div>
    </div>
  )
}

export default InputOption