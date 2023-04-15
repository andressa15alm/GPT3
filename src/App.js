import React from 'react'
import {Footer,Blog,Features,WhatchatGPT,Header, Possibility} from './containes'
import {Brand,Cta,Navbar} from './components'
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <div className='gradient-bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatchatGPT/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App