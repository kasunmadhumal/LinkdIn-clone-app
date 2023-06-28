import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HouseIcon from '@mui/icons-material/House';
import MyNetworkIcon from '@mui/icons-material/PeopleAlt';
import JobsIcon from '@mui/icons-material/BusinessCenter';
import MesssageIcon from '@mui/icons-material/Sms';
import NotificationIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebaseStore';
import { logout, selectUser } from './features/userSlice';

function Header() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  const logoutOfApp = () => {
     dispatch(logout())
     auth.signOut()
  }


  return (
    <div className='header'>
        <div className="header_left">

                <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="linkdin icom" />

                <div className="header_search">
                    {/* search icon */}
                    <SearchIcon />
                    <input type="text" placeholder='search'/>
                </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon = {HouseIcon} tittle="Home"/>
            <HeaderOption Icon = {MyNetworkIcon} tittle="My Network"/>    
            <HeaderOption Icon = {JobsIcon} tittle="Jobs"/>   
            <HeaderOption Icon = {MesssageIcon} tittle="Messaging"/>
            <HeaderOption Icon = {NotificationIcon} tittle="Notifications"/>
            <HeaderOption avatar={user.photoURL} name = {user.displayName[0]}
                          tittle="Me" onClick={logoutOfApp} />
            {/* <HeaderOption tittle="Work"/> */}
        </div>
    </div>
  )
}

export default Header