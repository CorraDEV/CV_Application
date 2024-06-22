import { useState } from 'react';

export default function WorkExperience({itemID, children}) {    
    const [job, setJob] = useState(
        {
            companyName: '',
            role: '',
            beginDate: '',
            endDate: ''
        }
    );      
    const [isEdit, setEdit] = useState(true);      
    const handleCompanyName = (evt) => setJob({...job, companyName: evt.target.value});
    const handleRole = (evt) => setJob({...job, role: evt.target.value});
    const handleBeginDate = (evt) => setJob({...job, beginDate: evt.target.value});
    const handleEndDate = (evt) => setJob({...job, endDate: evt.target.value});
    const workBlockStyle = {display: 'flex', justifyContent: 'space-evenly'};
    
    return (            
        <div id={itemID} style = {workBlockStyle}>
            {isEdit
            ?
                <>
                    <input type = 'text' value = {job.companyName}
                    onChange = {handleCompanyName}/>             
                    <input type = 'text' value = {job.role}
                    onChange = {handleRole}/>
                    <input type = 'date' value = {job.beginDate} 
                    onChange = {handleBeginDate}/>
                    <input type = 'date' value = {job.endDate} 
                    onChange = {handleEndDate}/>
                </>
            :
                <>
                    <span>{job.companyName}</span>            
                    <span>{job.role}</span>            
                    <span>{job.beginDate}</span>            
                    <span>{job.endDate}</span>
                </>
            }                        
            <button onClick={() => setEdit(!isEdit)}>Edit</button>            
            {children}
        </div>
    )
}