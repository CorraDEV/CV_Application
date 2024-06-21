import { useState } from 'react';

export default function WorkExperience() {
    const [job, setJob] = useState(
        {
            companyName: '',
            role: '',
            beginDate: '',
            endDate: ''
        }
    );            
    const handleCompanyName = (evt) => setJob({...job, companyName: evt.target.value});
    const handleRole = (evt) => setJob({...job, role: evt.target.value});
    const handleBeginDate = (evt) => setJob({...job, beginDate: evt.target.value});
    const handleEndDate = (evt) => setJob({...job, endDate: evt.target.value});
    console.log(job);
    return (        
    <div>
      <input type = 'text' value = {job.companyName} onChange = {handleCompanyName}/>
      <input type = 'text' value = {job.role} onChange = {handleRole}/>
      <input type = 'date' value = {job.beginDate} onChange = {handleBeginDate}/>
      <input type = 'date' value = {job.endDate} onChange = {handleEndDate}/>
    </div>
  )
}