import React from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'
import './App.css'

const onFileChange = event => {
  console.log(event.target.files)
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm onFileChange={onFileChange} />
      <Footer />
    </div>
  )
}

export default App
