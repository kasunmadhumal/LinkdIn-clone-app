import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/BorderColor';
import InputOption from './InputOption';
import PhotoIcon from '@mui/icons-material/CameraAlt';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Description';
import Post from './Post';
import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import { db } from './firebaseStore';
import {about} from './profile';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('') 
  const [posts, setPosts] = useState([])

  useEffect(() => {
     db.collection('posts').orderBy('timeStamps', 'desc').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => ({    
            id: doc.id,
            data: doc.data(),
        })))
     ))
  },[])

  const sendPost = (event) => {
     event.preventDefault();
     db.collection('posts').add({
            name: user.displayName,
            description: about,
            message: input,
            photoUrl: user.photoURL,
            timeStamps: firebase.firestore.FieldValue.serverTimestamp(),
     })

     setInput('');

  }
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__inputContainerHeader">
                <Avatar src={user.photoURL}>
                    {user.displayName[0]}
                </Avatar>
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input value={input} onChange={e=>(setInput(e.target.value))} type="text" />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={PhotoIcon} title='Photo' color={{color: '#7085F9'}} />
                <InputOption Icon={VideoIcon} title='Video' color={{color: '#E7A33E'}} />
                <InputOption Icon={EventIcon} title='Event' color={{color: '#COCBCD'}} />
                <InputOption Icon={ArticleIcon} title='Write Article' color={{color: '#7FC15E'}} />
            </div>
        </div>
        <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl, timeStamps}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                    timeStamps={timeStamps}
                />
            ))}
        </FlipMove>
    </div>
  )
}

export default Feed; 