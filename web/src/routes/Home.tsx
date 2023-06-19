import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  
  
  const getPosts = async () => {
    const response = await fetch('http://localhost:3333/posts')
    const data = await response.json()
    setPosts(data)
  }
  
  
  useEffect(() => {
    getPosts()
  }, [])



  return (
    <>
      <div className="App">
        
      </div>

    </>
  )
}

export default Home