import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import PostPage from './components/PostPage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' exact component={HomePage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/post' component={PostPage} />
      </Routes>
    </Router>
  );
}

export default App
