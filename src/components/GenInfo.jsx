import { useState } from 'react';

export default function GenInfo({itemID, children}) {
  const [genInfo, setGenInfo] = useState({name: '', email: '', phoneNumber: ''});            
  const [isEdit, setEdit] = useState(true);      
  const handleName = (evt) => setGenInfo({...genInfo, name: evt.target.value});        
  const handleEmail = (evt) => setGenInfo({...genInfo, email: evt.target.value});        
  const handlePhoneNumber = (evt) => setGenInfo({...genInfo, phoneNumber: evt.target.value});        
  const genInfoBlockStyle = {display: 'flex', justifyContent: 'space-evenly'};
  
  return (        
    <div id={itemID} style = {genInfoBlockStyle}>
      {isEdit
      ?
        <>
          <input type = 'text' value = {genInfo.name} onChange = {handleName}/>
          <input type = 'email' value = {genInfo.email} onChange = {handleEmail}/>
          <input type = 'tel' value = {genInfo.phoneNumber} onChange = {handlePhoneNumber}/>
        </>
      :
        <>
          <span>{genInfo.name}</span>
          <span>{genInfo.email}</span>  
          <span>{genInfo.phoneNumber}</span>
        </>
      }                                   
      <button onClick={() => setEdit(!isEdit)}>Edit</button>
      {children}
    </div>
  )
}