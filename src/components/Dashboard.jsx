import React, { useState } from 'react'


import Edit from "./Edit"
import Add from "./Add"
import Header from "./Header"
import  List from "./List"

import {employeesData} from "./db";

function Dashboard() {
   
    const [employees,setEmployees]=useState(employeesData);
    const [selectedEmployee,setSelectedEmployee]=useState(null)
    const [isAdding,setIsAdding]=useState(false);
    const [isEdit,setIsEdit]=useState(false);

    
    const handleDelete =(id)=>{
        alert(`                 confirm delete
                data will be deleted permanently`).then((result)=>{
                if(result.value){
                    const [employee] = employees.filter(employee =>
                        employee.id===id)

                        alert("data deleted")

                        setEmployees(employees.filter(employee=>
                            employee.id !==id));
                }
                })
    }

    const handleEdit =(id)=>{
        const [employee]=employees.filter(employee =>
            employee.id===id);
            setSelectedEmployee(employee);
            setIsEdit(true)
    }

  return (
    <div className='container'>
            {
                !isAdding && !isEdit && (
                        <>
                        <Header
                        setIsAdding={setIsAdding}
                        />
                        <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        />

                    </>
                )}
                { isAdding && (
                    <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                    />
                )}
                 { isEdit && (
                    <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEdit={setIsEdit}
                    />
                )}
    </div>
  )
}

export default Dashboard;