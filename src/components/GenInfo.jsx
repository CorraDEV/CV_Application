import { useState } from 'react';

export default function GenInfo() {
  const [genInfo, setGenInfo] = useState({name: '', email: '', phoneNumber: ''});            
  const [isEdit, setEdit] = useState(true);      
  const handleName = (evt) => setGenInfo({...genInfo, name: evt.target.value});        
  const handleEmail = (evt) => setGenInfo({...genInfo, email: evt.target.value});        
  const handlePhoneNumber = (evt) => setGenInfo({...genInfo, phoneNumber: evt.target.value});        
  console.log(genInfo);
  return (        
    <div>
      <input type = 'text' value = {genInfo.name} onChange = {handleName}/>
      <input type = 'email' value = {genInfo.email} onChange = {handleEmail}/>
      <input type = 'tel' value = {genInfo.phoneNumber} onChange = {handlePhoneNumber}/>
      <button>Edit</button>
    </div>
  )
}