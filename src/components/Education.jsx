import { useState } from 'react';

export default function Education({itemID, children}) {
    const [education, setEducation] = useState(
        {
            instituteName: '',
            degree: '',
            beginDate: '',
            endDate: ''
        }
    ); 
    const [isEdit, setEdit] = useState(true);      
    const handleInstituteName = (evt) => setEducation({...education, instituteName: evt.target.value});
    const handleDegree = (evt) => setEducation({...education, degree: evt.target.value});
    const handleBeginDate = (evt) => setEducation({...education, beginDate: evt.target.value});
    const handleEndDate = (evt) => setEducation({...education, endDate: evt.target.value});
    const educationBlockStyle = {display: 'flex', justifyContent: 'space-evenly'};
    
    return (        
        <div id={itemID} style = {educationBlockStyle}>
            {isEdit
            ?
                <>                
                    <input type = 'text' value = {education.instituteName} 
                    onChange = {handleInstituteName}/>
                    <input type = 'text' value = {education.degree} 
                    onChange = {handleDegree}/>
                    <input type = 'date' value = {education.beginDate} 
                    onChange = {handleBeginDate}/>
                    <input type = 'date' value = {education.endDate} 
                    onChange = {handleEndDate}/>                    
                </>
            :
                <>
                    <span>{education.instituteName}</span>
                    <span>{education.degree}</span>
                    <span>{education.beginDate}</span>
                    <span>{education.endDate}</span>
                </>
            }
            <button onClick={() => setEdit(!isEdit)}>Edit</button>
            {children}
        </div>
    )
}