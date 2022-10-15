import React, {useState}from 'react'

function Edit({employees,selectedEmployee,setEmployees,setIsEdit}) {

  const id= selectedEmployee.id

  const [firstName,setFirstName]=useState(selectedEmployee.firstName)
  const [lastName,setLastName]=useState(selectedEmployee.lastName)
  const [email,setEmail]=useState(selectedEmployee.email)
  const [salary,setSalary]=useState(selectedEmployee.salary)
  const [date,setDate]=useState(selectedEmployee.date)
  

  const handleUpdate=(e)=>{
    e.preventDefault()
    if(!firstName || !lastName || !email || !date || !salary )
    {
      return alert("all fields are required")

    }

    
    const employee={
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

      for (let i = 0; i < employees.length; i++) {
        if (employees[i].id==id){
          employees.splice(i,1,employee);
          break;
        }
      }
   
    setEmployees(employees);
    setIsEdit(false);

    alert(`${firstName} ${lastName}'s data has been updated`)
   

  }



  return (
    <div className='small-container'>
      <form onSubmit={handleUpdate}>
        <h1>Edit employee detail</h1>
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
       <input type="submit" value="Update"/>

        <label htmlFor="firstName">First Name</label>
            <input
              style={{marginLeft:"10px"}}
              className="muted-button"
              type="button"
              value="cancel"
              onChange={ () => setIsEdit(false)}
            />
       </div>

      
      </form>


    </div>
  )
}

export default Edit