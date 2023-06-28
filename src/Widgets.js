import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import AritcleListIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
       <div className="widgets__articleLeft">
         <AritcleListIcon />
       </div>
       <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>
       </div>
    </div>
  )


  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkdIn News</h2>
        <InfoIcon />
      </div>
      {newArticle('React is back', 'Top news - 9099 readers')}
      {newArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
      {newArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newArticle('Bitcoin Breaks $22k', 'Crypto - 8000 readers')}
      {newArticle('Is Redux too good?', 'Code - 123 readers')}
      {newArticle('React is back', 'Top news - 9099 readers')}
      {newArticle('Coronavirus: UK updates', 'Top news - 886 readers')}
      {newArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
      {newArticle('Bitcoin Breaks $22k', 'Crypto - 8000 readers')}
      {newArticle('Is Redux too good?', 'Code - 123 readers')}
    </div>
  )
}

export default Widgets