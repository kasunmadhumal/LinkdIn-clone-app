import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'

function HeaderOption({avatar, name, Icon, tittle, onClick}) {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption_icon" />}
        {
          (avatar || name) &&
          <Avatar className="headerOption_icon" src={avatar}>
            {name[0]}
          </Avatar>
        }
        <h3 className='headerOption_tittle'>{tittle}</h3>
    </div>
  )
}

export default HeaderOption