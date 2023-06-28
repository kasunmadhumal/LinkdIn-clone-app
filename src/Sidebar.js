import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function Sidebar() {

  const user = useSelector(selectUser)


  const recentItem = (topic) => (
     <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
     </div>
  );


  return (
    <div className="sidebar">
        <div className="sidebar__top">
          <img src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png" 
               alt="profile background" />
          <Avatar className="sidebar__avatar" src={user.photoURL} >
            {user.displayName[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>Software Engineering<br />Undergraduate</h4>
        </div>


        <div className="sidebar__stats">
          <div className="sidebar__stat">
              <p>Who viewed you</p>
              <div className="sidebar__statNumber">25k</div>
          </div>
          <div className="sidebar__stat">
              <p>Views on posts</p>
              <div className="sidebar__statNumber">55k</div>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p> 
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('softwareengineering')}
          {recentItem('design')}
          {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar;