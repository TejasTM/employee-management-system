import React, { useState } from 'react'


function Add({employees,setEmployees,setIsAdding}) {

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [salary,setSalary]=useState("")
  const [date,setDate]=useState("")
  

  const handleAdd=(e)=>{
    e.preventDefault()
    if(!firstName || !lastName || !email || !date || !salary )
    {
      return alert("all fields are required")

    }

    const id=employees.length+1;
    const newEmployee={
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    alert(`${firstName} ${lastName}'s data has been added`)
   

  }



  return (
    <div className='small-container'>
      <form onSubmit={handleAdd}>
        <h1>Add employee</h1>
        <label htmlFor="firstName">First Name</label>
          <input
          type="text" 
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={ e => setFirstName(e.target.value)}
          />

        <label htmlFor="lastName">Last Name</label>
          <input
          type="text" 
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={ e => setLastName(e.target.value)}
          />

        <label htmlFor="email">Email</label>
          <input
          type="email" 
          id='email'
          name='email'
          value={email}
          onChange={ e => setEmail(e.target.value)}
          />

        <label htmlFor="salary">Salary</label>
          <input
          type="number" 
          id='salary'
          name='salary'
          value={salary}
          onChange={ e => setSalary(e.target.value)}
          />

      <label htmlFor="date">Date</label>
          <input
          type="date" 
          id='date'
          name='date'
          value={date}
          onChange={ e => setDate(e.target.value)}
          />

      
       <div style={{marginTop:"30px"}}>
       <input type="submit" value="Add"/>

        <label htmlFor="firstName">First Name</label>
            <input
              style={{marginLeft:"10px"}}
              className="muted-button"
              type="button"
              value="cancel"
              onChange={ () => setIsAdding(false)}
            />
       </div>

      
      </form>


    </div>
  )
}

export default Add;