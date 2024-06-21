import { useState } from 'react';

export default function Education() {
    const [education, setEducation] = useState(
        {
            instituteName: '',
            degree: '',
            beginDate: '',
            endDate: ''
        }
    );            
    const handleInstituteName = (evt) => setEducation({...education, instituteName: evt.target.value});
    const handleDegree = (evt) => setEducation({...education, degree: evt.target.value});
    const handleBeginDate = (evt) => setEducation({...education, beginDate: evt.target.value});
    const handleEndDate = (evt) => setEducation({...education, endDate: evt.target.value});
    console.log(education);
    return (        
    <div>
      <input type = 'text' value = {education.instituteName} onChange = {handleInstituteName}/>
      <input type = 'text' value = {education.degree} onChange = {handleDegree}/>
      <input type = 'date' value = {education.beginDate} onChange = {handleBeginDate}/>
      <input type = 'date' value = {education.endDate} onChange = {handleEndDate}/>
    </div>
  )
}