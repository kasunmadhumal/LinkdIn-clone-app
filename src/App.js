import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebaseStore';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
         dispatch(login({
            email: userAuth.email,  
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
         }))
      }
      else{
        dispatch(login());
      }
    })
  },[])
  
  return (
    <div className="app">

        {!user ?(
          <Login />
        ):(
          <div>
            <Header/>
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
         </div>
        )}
          
        
    </div>
  );
}

export default App;
