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
    const [isEdit, setEdit] = useState(false);      
    const handleCompanyName = (evt) => setJob({...job, companyName: evt.target.value});
    const handleRole = (evt) => setJob({...job, role: evt.target.value});
    const handleBeginDate = (evt) => setJob({...job, beginDate: evt.target.value});
    const handleEndDate = (evt) => setJob({...job, endDate: evt.target.value});
    const fieldStyle = {display: isEdit ? 'none' : 'inline'};
    const editFieldStyle = {display: isEdit ? 'inline' : 'none'};
    const workBlockStyle = {display: 'flex', justifyContent: 'space-evenly'};
    console.log(job);
    return (            
        <div style = {workBlockStyle}>
            <span style = {fieldStyle}>{job.companyName}</span>
            <input style = {editFieldStyle} type = 'text' value = {job.companyName}
            onChange = {handleCompanyName}/>             
            <span style = {fieldStyle}>{job.role}</span>
            <input style = {editFieldStyle} type = 'text' value = {job.role}
            onChange = {handleRole}/>
            <span style = {fieldStyle}>{job.beginDate}</span>
            <input style = {editFieldStyle} type = 'date' value = {job.beginDate} 
            onChange = {handleBeginDate}/>
            <span style = {fieldStyle}>{job.endDate}</span>
            <input style = {editFieldStyle} type = 'date' value = {job.endDate} 
            onChange = {handleEndDate}/>
            <button onClick={() => setEdit(!isEdit)}>Edit</button>
        </div>
    )
}