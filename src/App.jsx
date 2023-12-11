import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import BlogPage from './components/BlogPage'
import PostPage from './components/PostPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact component={HomePage} />
        <Route path='/blog' component={BlogPage} />
        <Route path='/blog/:id' component={PostPage} />
      </Routes>
    </Router>
  );
}

export default App
