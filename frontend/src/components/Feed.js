import React from 'react'
import UniverseBox from './UniverseBox'
import './css/Feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <UniverseBox />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
