import React from 'react'
import BookEscort from './pages/BookEscort'
import Home from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-escort" element={<BookEscort />} />
        </Routes>
      </Router>
  )
}

export default App