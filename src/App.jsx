import { useState } from 'react'
import './App.css'
import GenInfo from './components/GenInfo'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'

export default function App() {
  const uuid = crypto.randomUUID();  
  const [genInfoList, setGenInfoList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const addGenInfo = () => setGenInfoList([...genInfoList,
  <GenInfo key = {uuid} itemID = {uuid}>
    <button onClick = {evt => setGenInfoList(
      genInfoList.filter(item => item.props.itemID !== evt.target.parentElement.itemID)
    )}>Delete</button>
  </GenInfo>]);
  const addEducation = () => setEducationList([...educationList,
  <Education key = {uuid} itemID = {uuid}>
    <button onClick = {evt => setEducationList(
      educationList.filter(item => item.props.itemID !== evt.target.parentElement.itemID)
    )}>Delete</button>
  </Education>]);
  const addWorkExperience = () => setWorkExperienceList([...workExperienceList,
  <WorkExperience key = {uuid} itemID = {uuid}>
    <button onClick = {evt => setWorkExperienceList(
      workExperienceList.filter(item => item.props.itemID !== evt.target.parentElement.itemID)      
    )}>Delete</button>
  </WorkExperience>]);
  
  return (    
    <>
      <h1>General Information</h1>
      {genInfoList}
      {genInfoList.length === 0 ? <button onClick={addGenInfo}>+</button> : null}
      <h1>Education</h1>
      {educationList}
      <button onClick={addEducation}>+</button>    
      <h1>Work Experience</h1>
      {workExperienceList}
      <button onClick={addWorkExperience}>+</button>    
    </>
  )
}