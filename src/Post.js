import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentRounded';
import ShareOutlinedIcon from '@mui/icons-material/Share';
import SendOutlinedIcon from '@mui/icons-material/Send';

const Post = forwardRef(({key, name, description, message, photoUrl, timeStamps}, ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div> 
        </div>

        <div className="post__body">
            <p>{message}
            </p>
        </div>

        <div className="post__buttons">
              <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color={{color: 'gray'}} />
              <InputOption Icon={CommentOutlinedIcon} title='Comment' color={{color: 'gray'}} />
              <InputOption Icon={ShareOutlinedIcon} title='Share' color={{color: 'gray'}} />
              <InputOption Icon={SendOutlinedIcon} title='Send' color={{color: 'gray'}} />
        </div>
    </div>
  )
})

export default Post