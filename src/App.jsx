import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GenInfo from './components/GenInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

function App() {
  return (    
    <>
      <h1>General Information</h1>
      <GenInfo></GenInfo>    
      <h1>Education</h1>
      <Education></Education>
      <h1>Work Experience</h1>
      <WorkExperience></WorkExperience>
    </>
  )
}

export default App